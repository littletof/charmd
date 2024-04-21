import { colors } from "./deps.ts";
import type { Options } from "./renderer.ts";
import type { Node, TableNode, TextNode } from "./nodeTypes.ts";
import { isMarkdownTable } from "./utils.ts";

/** The transfromer function is used to recuresively visit each node and make modifications to the `AST` for later steps */
export function transformer(mdast: Node, options: Options) {
  recurse(mdast, null!, options);
}

function recurse(node: Node, parent: Node, options: Options) {
  transformNode(node, parent, options);
  node.children?.forEach((n) => recurse(n, node, options));
}

function transformNode(node: Node, parent: Node, options: Options) {
  if (options?.extensions) {
    for (const ext of options?.extensions) {
      const skipOthers = ext.transformNode?.(transformNode, node, parent, options);
      if (skipOthers) {
        // skip all other transformations
        return;
      }
    }
  }

  switch (node.type) {
    case "image":
      break;
    case "link":
      break;
    case "imageReference":
      break;
    case "definition":
      break;
    case "inlineCode":
      break;
    case "code":
      break;

    case "list":
      // If current list node is inside another list node's list item, set and propagate level to itself and child listItems
      node.listLevel = parent.type === "listItem" ? parent.listLevel! + 1 : 0;
      node.children?.forEach((ch) => ch.listLevel = node.listLevel);
      break;

    case "thematicBreak": {
      let terminalWidth;
      // try needed because Deno.consoleSize() fails when used in test https://github.com/denoland/deno/issues/17982, https://github.com/denoland/deno/issues/14543
      try {
        terminalWidth = options.lineWidth || Deno.consoleSize().columns;
      } catch {
        terminalWidth = 160;
      }
      const width = Math.min(terminalWidth, Math.max(terminalWidth / 2, 80));

      node.value = colors.reset("_".repeat(width)) + "\n";
      break;
    }

    case "paragraph":
      checkForTable(node, parent, options);
      break;
  }
}

function checkForTable(node: Node, _parent: Node, _options: Options) {
  if (node.type === "paragraph") {
    // TODO check cases where a contained node does not have `.value`. Remove `as TextNode`
    const table = node.children?.map((c) => (c as TextNode).value).join("").trim();
    if (isMarkdownTable(table || "")) {
      (node as Node as TableNode).type = "table";
    }
  }
}
