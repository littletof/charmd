import { Node, toAst } from './utils.ts';
import { transformer } from './transformer.ts';
import { generator } from './generator.ts';
import { strike, strikethroughExt } from './deps.ts';


export interface Extension {
    /** Called before AST generation, if a string is returned,
     * it will override the input markdown for later extension's init fn and processing steps */
    init?(md: string, options: Options) : string | void;

    /** Called with the generated AST's root node, before any transformations */
    postAST?(astRoot: Node, options: Options): void;

    /** Called with each node */
    transformNode?(
        /** The builtin recursive transform function, can be called, to transform the node's children */
        transformerFn: (node: Node, parent: Node, options: Options) => void,
        node: Node, parent: Node | undefined, options: Options
    ): boolean | void;

    /** Called after all the transformations ran for all nodes */
    postTransform?(astRoot: Node, options: Options): void;

    /** Called with each node. It should return the string representation of
     * the rendered node,if the extension handles that specific node, or void,
     * if its not handled by the extension. */
    generateNode?(
        /** The builtin recursive generator function, can be called, to render the node's children */
        generatorFn: (node: Node, parent: Node, options: Options) => string | undefined,
        node: Node, parent: Node | undefined, options: Options
    ): string | void;

    /** Called after the string representation is created. */
    postGenerate?(rendered: string, options: Options): string;
}

export interface MdastOptions {
    /** SyntaxExtension[] */
    // deno-lint-ignore no-explicit-any
    extensions?: any[];
    /** MdastExtension[] */
    // deno-lint-ignore no-explicit-any
    mdastExtensions?: any[];
}

/** Options for the processing and rendering of the markdown */
export interface Options {
    extensions?: Extension[];
    tableBorder?: boolean; // TODO or string to override borderChars
    listIcons?: string[];

    /** **UNSTABLE**: The AST generator may change in the future.
     * 
     * Currently https://github.com/syntax-tree/mdast-util-from-markdown is used as the AST generator
     */
    mdast?: {
        /** BufferEncoding https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings*/
        encoding?: string; 
        options?: MdastOptions
    }
}

/** Returns a string for the provided markdown, which printed in a terminal results in a formatted markdown text
 *
 * @param {string} md The input markdown string
 * @param {Options} [options={}] Options for the processing and rendering of the markdown
 * @returns {string} The rendered output of the provided markdown text
 */
export function renderMarkdown(md: string, options: Options = {}): string {
    options?.extensions?.forEach(ext => {
        md = ext.init?.(md, options) || md;
    });

    const mdastOptions = {
        mdastExtensions: [strikethroughExt, ...(options?.mdast?.options?.mdastExtensions || [])],
        extensions: [strike(), ...(options?.mdast?.options?.extensions || [])]
    };

    const mdastEncoding = options.mdast?.encoding || 'utf8';

    const mdast = toAst(md, mdastEncoding, mdastOptions);

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