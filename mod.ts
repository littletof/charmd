import { toAst } from './utils.ts';
import { transformer } from './transformer.ts';
import { generator } from './generator.ts';

/**
 * Returns a string for the provided markdown, which printed in a terminal results in a formatted markdown text
 * 
 * Uses https://github.com/syntax-tree/mdast-util-from-markdown as its core under the hood.
 */
export function renderMarkdown(md: string, encodig?: any, options?: {extensions?: any[], mdastExtensions?: any[]}): string {
    const mdast = toAst(md, encodig, options);
    transformer(mdast);
    return generator(mdast) ?? "";
}

export type { Node } from './utils.ts';
export { toAst } from './utils.ts';
export { transformer } from './transformer.ts';
export { generator } from './generator.ts';