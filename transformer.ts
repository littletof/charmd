// Core of this file comes from https://github.com/dephraiim/termd/blob/1.4.0/src/transformer.ts

import {colors} from './deps.ts';
import { Options } from "./renderer.ts";
import { getHeaderFormatter, isMarkdownTable, Node, transformTable } from './utils.ts';

// TODO move most transforms, which assign node.value to generator

export function transformer(mdast: Node, options: Options | undefined) {
    recurse(mdast, null!, options);
};

function recurse(node: Node, parent: Node, options: Options | undefined) {
    transformNode(node, parent, options);
    node.children?.forEach(n => recurse(n, node, options));
}

function transformNode(node: Node, parent: Node, options: Options | undefined) {

    if(options?.extensions) {
        for(const ext of options?.extensions) {
            const skipOthers = ext.transformNode?.(node, parent, options);
            if(skipOthers) {
                // skip all other transformations
                return;
            }
        }
    }

    // TODO(littletof) move to proper place
    handleTable(node, parent);

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
                const link = `[${node.value}](${parent.url})`;
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
            break;
        case 'imageReference':
            break;
        case 'definition':
            break;
        case 'inlineCode':
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
            break;
    }
}

function handleTable(node: Node, parent: Node) {
    if(node.type === "paragraph") {
        const table = node.children?.map(c => c.value).join("").trim();
        if(isMarkdownTable(table || '')) {
            node.type = 'table';
        }
    }
}