// Core of this file comes from https://github.com/dephraiim/termd/blob/1.4.0/src/generator.ts

import {colors} from './deps.ts';
import { Options } from "./renderer.ts";
import { getHeaderFormatter, Node, transformTable } from './utils.ts';

export function generator(node: Node, parent: Node, options: Options | undefined): string | undefined {

    if(options?.extensions) {
        for(const ext of options?.extensions) {
            const hasResult = ext.generateNode?.(generator, node, parent, options);
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
            const imageLink = `![${node.alt}](${node.url})`;
            return colors.gray(colors.italic(`Image: ${imageLink}`));
        case 'imageReference':
            const ref = `![${node.alt}]${colors.cyan(`[${node.label}]`)}`;
            return colors.gray(colors.italic(`Image reference: ${ref}`));
        case 'link':
            const linkText = node.children?.map(ch => generator(ch, node, options)).join('');
            const link = `[${linkText}](${node.url})`
            return colors.cyan(link);
        case 'strong':
            const strongContent = node.children?.map((child: Node) => generator(child, node, options)).join('');
            return colors.bold(strongContent || '');
        case 'emphasis':
            const emphasisContent =  node.children?.map((child: Node) => generator(child, node, options)).join('');
            return colors.italic(emphasisContent || '');
        case 'heading':
            return getHeaderFormatter(node.depth || 0)('#'.repeat(node.depth!) + ' ' + node.children?.map((ch: Node) => generator(ch, node, options)).join('')) + '\n'

        case 'linkReference':
            return (
                colors.cyan(colors.italic( 
                    '[' + (node.children?.map((child: Node) => generator(child, node, options)).join('') ??  "") + ']'
                ))
            );

        case 'paragraph':
            return (
                node.children?.map((child: Node) => generator(child, node, options)).join('') + '\n'
            );

        case 'blockquote':
            // gen childs
            return node.children?.map((child: Node) => generator(child, node, options)?.split('\n')
                    .map((l: string) => colors.gray(colors.italic(l)))
                    // then add horizontal line to the start of all generated chidren lines, except last \n
                    .map((l,i,a) => (i != a.length-1 && l.trim() ? '┃ ' : '') + l).join('\n')).join('');

        case 'list':
            const generateList = (icon: (i: number) => string) => {
                const tabForList = '  ';
                return node.children?.map((child: Node, i: number) => {
                    const tabForMultiline = ' '.repeat(colors.stripColor(icon(i)).length || 2);
                    return (icon(i) + generator(child, node, options))
                    ?.replace(/\n$/, '').split('\n').map((l,i) => tabForList + (i ? tabForMultiline +l: l)).join('\n') + '\n'; // indent full list
                }).join('').split('\n').map((l: string) => l.replace(tabForList, '')).join('\n'); // remove outermost indent from each line -> level 0 ha 0 indent
            };
    
            if(node.ordered) {
                return generateList(i => colors.gray(`${node.start ? node.start + i : i+1}. `));
            } else {
                const icons = options?.listIcons || ['-', '◦', '▪', '▸'];
                const icon = icons[Math.min(node.listLevel!, icons.length-1)];
                return generateList(i => colors.gray(`${icon} `));
            }

        case 'listItem':
            return node.children?.map((ch: Node) => generator(ch, parent, options)).join(node.spread? '\n' : '');

        case 'code':
            let codeBlock = '';
            const xPadding = 2;
            const padString = (length: number) => colors.bgBrightBlack(colors.gray(' '.repeat(length)));
            
            const title = ` codeblock ${node.lang? `[${node.lang}]` : ''}`;
            const lines: string[] = node.value.replaceAll('\r', '').replaceAll('\t', '    ').split('\n');
            const max = Math.max(...lines.map(l => l.length), title.length);

            codeBlock += colors.bgWhite(colors.black(colors.italic(title)) + colors.white(' '.repeat((max-title.length) + xPadding*2))) + '\n';

            // codeBlock += padString(max + 2*xPadding) + "\n"; // VSCode terminal leaves these empty on first render
            codeBlock += colors.bgBrightBlack(' ')+padString(max + 2*xPadding-1) + "\n";

            lines.forEach(l => {
                if(l.trim().length === 0) {
                    l = ' ';
                }
                const paddingStart = padString(xPadding);
                const code = colors.bgBrightBlack(colors.black(colors.italic(l)));
                const paddingEnd = padString(max-l.length + xPadding);

                codeBlock+= paddingStart + code + paddingEnd + /* `(${l.length},${max})` + */ '\n';
            });
            codeBlock += colors.bgBrightBlack(' ')+padString(max + 2*xPadding-1) + "\n";

            return codeBlock;

        case 'inlineCode':
            // return colors.inverse(colors.bgBrightWhite(colors.black(` ${node.value} `)));
            // return colors.white(colors.inverse(colors.bgBrightBlack(` ${node.value} `))); works
            // return colors.white(colors.inverse(colors.bgBlack(` ${node.value} `))); // best
            return colors.inverse(` ${node.value} `);

        case 'table':
            const t = node.children?.map((child: Node) => generator(child, node, options)).join('') || '';
            return transformTable(t, options?.tableBorder ?? true) + '\n';

        case 'thematicBreak':
            return node.value;
        case 'text':
            return node.value;
        case 'html':
            return node.value;

        default:
            // console.log({...node});
            return node.value;
    }
};