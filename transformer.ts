// Core of this file comes from https://github.com/dephraiim/termd/blob/1.4.0/src/transformer.ts

import {colors} from './deps.ts';
import { Options } from "./renderer.ts";
import { isMarkdownTable, Node } from './utils.ts';

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

    switch (node.type) {
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
        case 'code':
            break;

        case 'list':
            node.listLevel = parent.type === 'listItem' ? parent.listLevel! + 1 : 0;
            node.children?.forEach((ch: any) => ch.listLevel = node.listLevel);
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
        
        case 'paragraph':
            checkForTable(node, parent, options)
            break;
    }
}

function checkForTable(node: Node, parent: Node, options: Options | undefined) {
    if(node.type === "paragraph") {
        const table = node.children?.map(c => c.value).join("").trim();
        if(isMarkdownTable(table || '')) {
            node.type = 'table';
        }
    }
}