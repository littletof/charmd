// TODO check https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mdast/index.d.ts

export type Node =
  | RootNode
  | HeaderNode
  | TextNode
  | HtmlNode
  | ParagraphNode
  | StrongNode
  | EmphasisNode
  | StrikethroughNode
  | BlockQuoteNode
  | ListItemNode
  | OrderedListNode
  | UnorderedListNode
  | InlineCodeNode
  | CodeNode
  | ThematicBreakNode
  | ImageNode
  | ImageReferenceNode
  | LinkNode
  | LinkReferenceNode
  | DefinitionNode
  | TableNode;

export interface NodePosition {
  line: number;
  column: number;
  offset: number;
}

export interface NodeBase {
  type: string;
  position: {
    start: NodePosition;
    end: NodePosition;
  };
  children?: Node[];
}

export interface RootNode extends NodeBase {
  type: "root";
}

export interface HeaderNode extends NodeBase {
  type: "heading";
  depth: number;
  children: Node[];
}

export interface TextNode extends NodeBase {
  type: "text";
  value: string;
}

export interface HtmlNode extends NodeBase {
  type: "html";
  value: string;
}

export interface ParagraphNode extends NodeBase {
  type: "paragraph";
  children: Node[];
}

export interface StrongNode extends NodeBase {
  type: "strong";
  children: Node[];
}

export interface EmphasisNode extends NodeBase {
  type: "emphasis";
  children: Node[];
}

export interface StrikethroughNode extends NodeBase {
  type: "delete";
  children: Node[];
}

export interface BlockQuoteNode extends NodeBase {
  type: "blockquote";
  children: Node[];
}

export interface ListNode extends NodeBase {
  type: "list";
  ordered: boolean;
  start: null | number;
  /**
   * Whether one or more of the children are separated with a blank line from
   * its siblings (when `true`), or not (when `false` or not present).
   */
  spread: boolean;
  children: ListItemNode[];
  listLevel: number;
}

export interface OrderedListNode extends ListNode {
  ordered: true;
  start: number;
}

export interface UnorderedListNode extends ListNode {
  ordered: false;
  start: null;
}

export interface ListItemNode extends NodeBase {
  type: "listItem";
  /**
   * Whether one or more of the children are separated with a blank line from
   * its siblings (when `true`), or not (when `false` or not present).
   */
  spread: boolean;
  checked: null;
  listLevel: number;
  children: Node[];
}

export interface InlineCodeNode extends NodeBase {
  type: "inlineCode";
  value: string;
}

export interface CodeNode extends NodeBase {
  type: "code";
  value: string;
  lang: string;
  /** Anything after the language.
   *
   * \`\`\`ts codeExample title="helloWorld.ts" 6
   *
   * console.log('alma')
   *
   * \`\`\`
   *
   * Gives `meta: 'codeExample title="helloWorld.ts" 6'`
   */
  meta: string;
}

export interface ThematicBreakNode extends NodeBase {
  type: "thematicBreak";
  value: string;
  children: never;
}

export interface ImageNode extends NodeBase {
  type: "image";
  title: string | null;
  url: string;
  alt: string;
  children: never;
}

export interface ImageReferenceNode extends NodeBase {
  type: "imageReference";
  alt: string;
  label: string;
  identifier: string;
  referenceType: ReferenceType;
}

/**
 * Explicitness of a reference.
 *
 * `'shortcut'`: the reference is implicit, its identifier inferred from its
 *   content
 *
 * `'collapsed'`: the reference is explicit, its identifier inferred from its
 *   content
 *
 * `'full'`: the reference is explicit, its identifier explicitly set
 */
export type ReferenceType = "shortcut" | "collapsed" | "full";

export interface LinkNode extends NodeBase {
  type: "link";
  title: string | null;
  url: string;
  children: Node[];
}

export interface LinkReferenceNode extends NodeBase {
  type: "linkReference";
  label: string | null;
  identifier: string;
  referenceType: ReferenceType;
  children: Node[];
}

export interface DefinitionNode extends NodeBase {
  type: "definition";
  label: string | null;
  identifier: string;
  title: string | null;
  url: string;
}

export interface TableNode extends NodeBase {
  type: "table";
  children: Node[];
}
