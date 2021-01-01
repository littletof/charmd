import {colors} from './deps.ts';
import { getHeaderFormatter, Node } from './utils.ts';

export const generator = (node: Node): string | undefined => {
    switch (node.type) {
        case 'root':
            return node.children?.map((child: Node) => generator(child)).join('\n');

        case 'link':
        case 'strong':
        case 'emphasis':
            return node.children?.map((child: Node) => generator(child)).join(' ');
        case 'heading':
            const wholeHead = node.children?.map((child: Node) => generator(child)).join('');
            return `${getHeaderFormatter(node.depth || 0)('#'.repeat(node.depth || 1)+" ")}${wholeHead}` + '\n';

        case 'linkReference':
            return (
                colors.cyan(colors.italic( 
                    '[' + (node.children?.map((child: Node) => generator(child)).join('') ??  "") + ']'
                ))
            );

        case 'paragraph':
            return (
                node.children?.map((child: Node) => generator(child)).join('') +
                '\n'
            );

        case 'blockquote':
            // gen childs, then add horizontal line to the start of all generated chidren lines, except last \n
            return node.children?.map((child: Node) => generator(child)?.split('\n').map((l,i,a) => (i != a.length-1 && l.trim() ? '┃ ' : '') + l).join('\n')).join('');

        case 'list':
            let returnNode;
            if (node.ordered) {
                returnNode = node.children?.map((child: Node, index: number) => {
                    let numberIndicator = colors.bold(colors.gray(index + 1 + '.'));
                    return `${numberIndicator} ` + generator(child);
                });
            } else {
                returnNode = node.children?.map(
                    (child: Node) => `${colors.bold(colors.gray('-'))} ` + generator(child)
                );
            }
            return returnNode!.join('');

        case 'listItem':
            return node.children?.map((child: Node) => {
                    if (child.type === 'list') {
                        child.tabed = true;
                        return '    ' + generator(child);
                    } else {
                        if (child.tabed) {
                            child.tabed = true;
                            return '    ' + generator(child);
                        } else {
                            return generator(child);
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

        default:
            // console.log({...node});
            return node.value;
    }
};