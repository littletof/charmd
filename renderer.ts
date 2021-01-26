import { Node, toAst } from './utils.ts';
import { transformer } from './transformer.ts';
import { generator } from './generator.ts';


export interface Extension {
    /** Called with the generated AST's root node, before any transformations */
    postAST?(astRoot: Node, options: Options | undefined): void;
    /** Called with each node */
    transformNode?(node: Node, parent: Node | undefined, options: Options | undefined): boolean | void; // TODO add original transform as param
    /** Called after all the transformations ran for all nodes */
    postTransform?(astRoot: Node, options: Options | undefined): void;

    generateNode?(node: Node, parent: Node | undefined, options: Options | undefined): string | void; // TODO add original generate as param
    postGenerate?(rendered: string, options: Options | undefined): string;
}

export interface Options {
    extensions?: Extension[]
}

/**
 * Returns a string for the provided markdown, which printed in a terminal results in a formatted markdown text
 * 
 * Uses https://github.com/syntax-tree/mdast-util-from-markdown as its core under the hood.
 */
export function renderMarkdown(md: string, options?: Options): string {
    const mdast = toAst(md /* TODO pass as unstable */);

    options?.extensions?.forEach(ext => {
        ext.postAST?.(mdast, options);
    });

    transformer(mdast, options);

    options?.extensions?.forEach(ext => {
        ext.postTransform?.(mdast, options);
    });
    
    let mdString = generator(mdast, null!, options) ?? "";

    options?.extensions?.forEach(ext => {
        mdString = ext.postGenerate?.(mdString, options) ?? mdString;
    });

    return mdString;
}