// deno bundle --no-check .\mdast_poly_out.ts mdast-util-from-markdown@0_8_4-shimmed.js

// Shim document
globalThis.document = {
    createElement: (...data: any[]) => {
        return new class {
            set innerHTML(data: string) {this.textContent = data};
            textContent = '';
        }();
    }
};
document.createElement(); // needed
// ---------

import * as mdast from 'https://jspm.dev/mdast-util-from-markdown@0.8.4';

export type mdastFromMarkdownFn = (markdown: string, encodig?: any, options?: {extensions?: any[], mdastExtensions?: any[]}) => any;
export const fromMarkdown: mdastFromMarkdownFn = mdast.default as mdastFromMarkdownFn;