import { toAst } from './utils.ts';
import { transformer } from './transformer.ts';
import { generator } from './generator.ts';

// https://github.com/syntax-tree/mdast-util-from-markdown

export function renderMarkdown(md: string, encodig?: any, options?: {extensions?: any[], mdastExtensions?: any[]}): string {
    const mdast = toAst(md, encodig, options);
    transformer(mdast);
    return generator(mdast) ?? "";
}

export type { Node } from './utils.ts';
export { toAst } from './utils.ts';
export { transformer } from './transformer.ts';
export { generator } from './generator.ts';