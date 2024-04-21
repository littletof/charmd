export interface NodePosition {
    line: number;
    column: number;
    offset: number;
}

export interface Node {
    type: string;
    position: {
        start: NodePosition;
        end: NodePosition;
    };
    children?: Node[];
};

export interface RootNode extends Node {
    type: "root";
}

export interface HeaderNode extends Node {
    type: "heading";
    depth: number;
    // TODO children always?!
}

export interface TextNode extends Node {
    type: "text";
    value: string;
}

export interface HtmlNode extends Node {
    type: "html";
    value: string;
}

export interface ParagraphNode extends Node {
    type: "paragraph";
    children: Node[];
}

export interface StrongNode extends Node {
    type: "strong";
    children: Node[];
}

export interface EmphasisNode extends Node {
    type: "emphasis";
    children: Node[];
}

export interface StrikethroughNode extends Node {
    type: "delete";
    children: Node[];
}

export interface BlockQuoteNode extends Node {
    type: "blockquote";
    children: Node[];
}

export interface ListNode extends Node {
    type: "list";
    ordered: boolean;
    start: null | number;
    spread: boolean; // TODO only false
    children: ListItemNode[];
}

export interface OrderedListNode extends ListNode {
    ordered: true;
    start: number;
}

export interface UnorderedListNode extends ListNode {
    ordered: false;
    start: null;
}

export interface ListItemNode extends Node {
    type: "listItem";
    spread: boolean; // TODO only seen false
    checked: unknown; // TODO null
    listLevel: number;
}

export interface InlineCodeNode extends Node {
    type: "inlineCode";
    value: string;
}

export interface CodeNode extends Node {
    type: "code";
    value: string;
    lang: string;
    meta: unknown; // TODO
}

export interface ThematicBreakNode extends Node {
    type: "thematicBreak";
    children: never;
}

export interface ImageNode extends Node {
    type: "image";
    title: string;
    url: string;
    alt: string;
    children: never;
}

export interface ImageReferenceNode extends Node {
    type: "imageReference";
    alt: string;
    label: string;
    identifier: string;
    referenceType: string; // TODO "full"
}

export interface LinkNode extends Node { // TODO children?!
    type: "link";
    title: string;
    url: string;
}

export interface LinkReferenceNode extends Node {
    type: "linkReference";
    label: string;
    identifier: string;
    referenceType: string; // TODO "shortcut"
    children: Node[];
}

export interface DefinitionNode extends Node { // TODO linkReference
    type: "definition";
    label: string;
    identifier: string;
    title: string; // TODO null
    url: string;
}

export interface TableNode extends Node {
    type: "table";
    children: Node[];
}

/* export type Node = {};

export interface RootNode {
    type: 'root';
}

export interface TextNode {
    type: 'text';
}

export interface DefinitionNode {
    type: 'definition';
    label: string;
    title?: string;
}

'root'
'heading'
'link'
'emphasis'
'strong'
'list'
'listItem'
'image'
'link'
'imageReference'
'definition'
'inlineCode'
'thematicBreak'
'code'
'paragraph'
'table'
'html' */
