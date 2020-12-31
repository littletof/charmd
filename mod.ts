import { toAst } from './utils.ts';
import { transformer } from './transformer.ts';
import { generator } from './generator.ts';

export function renderMarkdown(md: string): string {
    const mdast = toAst(md);
    transformer(mdast);
    return generator(mdast) ?? "";
};