// deno bundle --no-check .\mdast_shimmed_dep.ts mdast-util-from-markdown@0_8_4-shimmed.js

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

import * as mdast_js from 'https://jspm.dev/mdast-util-from-markdown@0.8.4';

export const mdast = mdast_js.default;