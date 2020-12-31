/* import chalk from 'chalk';
import terminalLink from 'terminal-link';
import traverser from 'unist-util-visit';
import { highlightWithPrism, isMarkdownTable, prettifyTable } from './utils.ts';
import cardinal from 'cardinal';
import { Node } from 'unist'; */

import {colors} from './deps.ts';
import type { Node } from './utils.ts';

function recurse(node: Node, parent: Node) {
    transformNode(node, parent);
    node.children?.forEach(n => recurse(n, node));
}

function transformNode(node: Node, parent: Node) {
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
                node.value += '\n';

                const headingFormats = [
                    (value: string) => value,
                    (value: string) => colors.bold(colors.underline(colors.red(value))),
                    (value: string) => colors.cyan(colors.bold(value)),
                    (value: string) => colors.yellow(colors.bold(value)),
                    (value: string) => colors.green(colors.bold(value)),
                    (value: string) => colors.blue(colors.bold(value)),
                    (value: string) => colors.magenta(colors.bold(value)),
                ];

                node.value = headingFormats[parent.depth || 0](`${'#'.repeat(parent.depth || 1)} ${node.value}`);
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
                        node.value = '┃ ' + colors.gray(colors.italic(node.value));
                        break;

                    case 'listItem':
                        node.value = colors.reset(node.value);
                        break;
                }
        }
    }

    switch (node.type) {
        case 'image':
            const link = `[${node.alt}](${node.url})`;// TODO terminalLink(node.alt as string, node.url as string);
            node.value = colors.gray(colors.italic(`Image: ${link}`));
            break;

        case 'inlineCode':
            node.value = colors.bgBrightBlack(colors.black(` ${node.value} `));
            node.type = 'text';
            break;

        case 'thematicBreak':
            Deno.consoleSize(Deno.stdout.rid).columns;

            const terminalWidth = Deno.consoleSize(Deno.stdout.rid).columns;
            const width = Math.min(terminalWidth, Math.max(terminalWidth/2, 75))

            node.value = colors.reset('_'.repeat(width) + '\n');
            break;

        case 'code':
            let codeBlock = '\n';
            const xPadding = 2;
            const padString = (length: number) => colors.bgBrightBlack(colors.gray('.'.repeat(length)));
            
            const title = ` codeblock [${node.lang}]`;
            const lines: string[] = node.value.split('\n');
            const max = Math.max(...lines.map(l => l.length));

            codeBlock += colors.bgWhite(colors.black(colors.italic(title)) + colors.white('.'.repeat(max-title.length + xPadding*2))) + '\n';
            // codeBlock += `${node.value}`;


            codeBlock += padString(max + 2*xPadding) + "\n";

            lines.forEach(l => {
                if(l.trim().length === 0) {
                    l = ' ';
                }
                const paddingStart = padString(xPadding);
                const code = colors.bgBrightBlack(colors.black(colors.italic(l)));
                const paddingEnd = padString(max-l.length + xPadding);

                codeBlock+= paddingStart + code + paddingEnd + '\n';
            });
            codeBlock += padString(max + 2*xPadding) + "\n\n";

            // node.value = colors.bgBrightBlack(colors.black(colors.italic(`${codeBlock}`))) +'\n';
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

    if (node.type === 'text') {
        /* if (isMarkdownTable(node.value as string)) {
            node.value = prettifyTable(node.value as string);
        } */
    }
}

export const transformer = async (mdast: Node) => {
    recurse(mdast, null!);
};