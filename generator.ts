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

        case 'image':
        case 'thematicBreak':
        case 'code':
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