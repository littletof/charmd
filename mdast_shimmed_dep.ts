// deno bundle --no-check .\mdast_shimmed_dep.ts mdast-util-from-markdown@1_2_0-shimmed.js

// Shim document
globalThis.document = {
    // deno-lint-ignore no-explicit-any
    createElement: (..._data: any[]) => {
        return new class {
            set innerHTML(data: string) {this.textContent = data}
            textContent = '';
        }();
    }
};
document.createElement(); // needed
// ---------

export {fromMarkdown as mdast} from 'https://esm.sh/mdast-util-from-markdown@1.2.0';
export * from "https://esm.sh/mdast-util-gfm-strikethrough@1.0.1";
export { gfmStrikethrough } from 'https://esm.sh/micromark-extension-gfm-strikethrough@1.0.4';