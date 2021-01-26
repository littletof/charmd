// Core of this file comes from https://github.com/dephraiim/termd/blob/1.4.0/src/generator.ts

import {colors} from './deps.ts';
import { Options } from "./renderer.ts";
import { getHeaderFormatter, Node, transformTable } from './utils.ts';

export function generator(node: Node, parent: Node, options: Options | undefined): string | undefined {

    if(options?.extensions) {
        for(const ext of options?.extensions) {
            const hasResult = ext.generateNode?.(node, parent, options);
            if(hasResult) {
                return hasResult;
            }
        }
    }

    switch (node.type) {
        case 'root':
            return node.children?.map((child: Node) => generator(child, node, options)).join('\n');

        case 'definition':
            const def = `${colors.cyan(`[${node.label}]`)}: [${node.title ?? ''}](${node.url})`;
            return colors.gray(colors.italic(`${def}\n`));
        case 'image':
            const link = `![${node.alt}](${node.url})`;
            return colors.gray(colors.italic(`Image: ${link}`));
        case 'imageReference':
            const ref = `![${node.alt}]${colors.cyan(`[${node.label}]`)}`;
            return colors.gray(colors.italic(`Image reference: ${ref}`));
        case 'link':
        case 'strong':
        case 'emphasis':
            return node.children?.map((child: Node) => generator(child, node, options)).join(' ');
        case 'heading':
            const wholeHead = node.children?.map((child: Node) => generator(child, node, options)).join('');
            return `${getHeaderFormatter(node.depth || 0)('#'.repeat(node.depth || 1)+" ")}${wholeHead}` + '\n';

        case 'linkReference':
            return (
                colors.cyan(colors.italic( 
                    '[' + (node.children?.map((child: Node) => generator(child, node, options)).join('') ??  "") + ']'
                ))
            );

        case 'paragraph':
            return (
                node.children?.map((child: Node) => generator(child, node, options)).join('') +
                '\n'
            );

        case 'blockquote':
            // gen childs
            return node.children?.map((child: Node) => generator(child, node, options)?.split('\n')
                    .map((l: string) => colors.gray(colors.italic(l)))
                    // then add horizontal line to the start of all generated chidren lines, except last \n
                    .map((l,i,a) => (i != a.length-1 && l.trim() ? '┃ ' : '') + l).join('\n')).join('');

        case 'list':
            let returnNode;
            if (node.ordered) {
                returnNode = node.children?.map((child: Node, index: number) => {
                    let numberIndicator = colors.bold(colors.gray(index + 1 + '.'));
                    return `${numberIndicator} ` + generator(child, node, options);
                });
            } else {
                returnNode = node.children?.map(
                    (child: Node) => `${colors.bold(colors.gray('-'))} ` + generator(child, node, options)
                );
            }
            return returnNode!.join('');

        case 'listItem':
            return node.children?.map((child: Node) => {
                    if (child.type === 'list') {
                        child.tabed = true;
                        return '    ' + generator(child, node, options);
                    } else {
                        if (child.tabed) {
                            child.tabed = true;
                            return '    ' + generator(child, node, options);
                        } else {
                            return generator(child, node, options);
                        }
                    }
                })
                .join('');

        case 'code':
            let codeBlock = '';
            const xPadding = 2;
            // TODO(littletof) remove dot as a filler. But space causes errors in vscode terminal, with empty lines
            const padString = (length: number) => colors.bgBrightBlack(colors.gray('.'.repeat(length)));
            
            const title = ` codeblock ${node.lang? `[${node.lang}]` : ''}`;
            const lines: string[] = node.value.replaceAll('\r', '').replaceAll('\t', '    ').split('\n');
            const max = Math.max(...lines.map(l => l.length), title.length);

            codeBlock += colors.bgWhite(colors.black(colors.italic(title)) + colors.white('.'.repeat((max-title.length) + xPadding*2))) + '\n';


            codeBlock += padString(max + 2*xPadding) + "\n";

            lines.forEach(l => {
                if(l.trim().length === 0) {
                    l = ' ';
                }
                const paddingStart = padString(xPadding);
                const code = colors.bgBrightBlack(colors.black(colors.italic(l)));
                const paddingEnd = padString(max-l.length + xPadding);

                codeBlock+= paddingStart + code + paddingEnd + /* `(${l.length},${max})` + */ '\n';
            });
            codeBlock += padString(max + 2*xPadding) + "\n";

            return codeBlock;
        case 'inlineCode':
            return colors.bgBrightBlack(colors.black(` ${node.value} `));

        case 'image':
        case 'thematicBreak':
        case 'text':
            return node.value;
        case 'html':
            return node.value;

        case 'table':
            const t = node.children?.map((child: Node) => generator(child, node, options)).join('') || '';
            return transformTable(t, true) + '\n';

        default:
            // console.log({...node});
            return node.value;
    }
};