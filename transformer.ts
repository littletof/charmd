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
            const skipOthers = ext.transformNode?.(transformNode, node, parent, options);
            if(skipOthers) {
                // skip all other transformations
                return;
            }
        }
    }

    // TODO(littletof) move to proper place
    handleTable(node, parent);

    if (node.type === 'text') {
        switch (parent.type) {
            case 'heading':
                // node.value = getHeaderFormatter(parent.depth || 0)(node.value);
                break;

            case 'link':
                /* const link = `[${node.value}](${parent.url})`;
                node.value = colors.cyan(link);; */
                break;

            case 'emphasis':
                // node.value = colors.italic(node.value);
                break;

            case 'strong':
                // node.value = colors.bold(node.value);
                break;
        }
    }

    switch (node.type) {
        case 'list':
            node.listLevel = parent.type === 'listItem' ? parent.listLevel! + 1 : 0;
            node.children?.forEach((ch: any) => ch.listLevel = node.listLevel);
            break;
        case 'image':
            break;
        case 'link':
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