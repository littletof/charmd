// Core of this file comes from https://github.com/dephraiim/termd/blob/1.4.0/src/transformer.ts

import {colors} from './deps.ts';
import { getHeaderFormatter, isMarkdownTable, Node, transformTable } from './utils.ts';

function recurse(node: Node, parent: Node) {
    transformNode(node, parent);
    node.children?.forEach(n => recurse(n, node));
}

function transformNode(node: Node, parent: Node) {

    // TODO(littletof) move to extension
    handleTable(node, parent);

    if (node.type === 'text') {
        /* if (isMarkdownTable(node.value)) {
            node.value = transformTable(node.value);
        } */
    }

    if (node.type === 'paragraph') {
        switch (parent?.type) {
            case 'blockquote':
                node.kind = 'blockquote';
                break;
            case 'listItem':
                node.kind = 'listItem';
                break;
        }
    }

    if (node.type === 'text') {
        switch (parent.type) {
            case 'heading':
                node.value = getHeaderFormatter(parent.depth || 0)(node.value);
                break;

            case 'link':
                const link = `[${node.value}](${parent.url})`; // terminalLink(node.value as string, (parent as any).url);
                node.value = colors.cyan(link);;
                break;

            case 'emphasis':
                node.value = colors.italic(node.value);
                break;

            case 'strong':
                node.value = colors.bold(node.value);
                break;

            case 'paragraph':
                switch (parent.kind) {
                    case 'blockquote':
                        // add color to each line, so when adding | per line, it doesnt mess the color up
                        // node.value = node.value.split('\n').map((l: string) => colors.gray(colors.italic(l))).join('\n');
                        break;

                    case 'listItem':
                        node.value = colors.reset(node.value);
                        break;
                }
        }
    }

    switch (node.type) {
        case 'image':
            const link = `![${node.alt}](${node.url})`;// TODO terminalLink(node.alt as string, node.url as string);
            node.value = colors.gray(colors.italic(`Image: ${link}`));
            break;
        case 'imageReference':
            const ref = `![${node.alt}]${colors.cyan(`[${node.label}]`)}`;
            node.value = colors.gray(colors.italic(`Image reference: ${ref}`));
            node.type = 'text';
            break;
        case 'definition':
            const def = `${colors.cyan(`[${node.label}]`)}: [${node.title ?? ''}](${node.url})`;
            node.value = colors.gray(colors.italic(`${def}\n`));
            node.type = 'text';
            break;

        case 'inlineCode':
            node.value = colors.bgBrightBlack(colors.black(` ${node.value} `));
            node.type = 'text';
            break;

        case 'thematicBreak':
            let terminalWidth;
            try {
                terminalWidth = (Deno as any/* so --unstable is not needed */).consoleSize(Deno.stdout.rid).columns;
            } catch {
                terminalWidth = 160;
            }
            const width = Math.min(terminalWidth, Math.max(terminalWidth/2, 80))

            node.value = colors.reset('_'.repeat(width) + '\n');
            break;

        case 'code':
            let codeBlock = '';
            const xPadding = 2;
            // TODO(littletof) remove dot as a filler. But space causes errors in vscode terminal, with empty lines
            const padString = (length: number) => colors.bgBrightBlack(colors.gray('.'.repeat(length)));
            
            const title = ` codeblock ${node.lang? `[${node.lang}]` : ''}`;
            const lines: string[] = node.value.replaceAll('\r', '').split('\n');
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

            node.value = codeBlock;

            /* const codeLang = node.lang ? chalk.gray('// ' + node.lang + '\n') : '';
            node.value += '\n';
            if (node.lang === 'ts' || node.lang === 'js' || node.lang === 'json') {
                node.value = cardinal.highlight(node.value);
            } else {
                try {
                    node.value = highlightWithPrism(
                        node.value as string,
                        node.lang as string
                    );
                } catch (error) {
                    node.value = chalk.gray(node.value);
                }
            }
            node.value = codeLang + node.value; */
            break;
    }
}

export const transformer = async (mdast: Node) => {
    recurse(mdast, null!);
};


function handleTable(node: Node, parent: Node) {
    if(node.type === "paragraph") {
        const table = node.children?.map(c => c.value).join("").trim();
        if(isMarkdownTable(table || '')) {
            node.type = 'table';
        }
    }
}