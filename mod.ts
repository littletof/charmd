import { toAst } from './utils.ts';
import { transformer } from './transformer.ts';
import { generator } from './generator.ts';

export const renderMarkdown = (filename: string) => {
    const md = Deno.readTextFileSync(filename);
    return renderString(md);
};

export const renderString = (md: string): string => {
    const mdast = toAst(md);
    transformer(mdast);
    return generator(mdast) ?? "";
};