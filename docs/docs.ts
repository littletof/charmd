import {renderMarkdown} from '../mod.ts';

let md = Deno.readTextFileSync('docs/docs.md');
let r = renderMarkdown(md);
// remove empty lines after header, to save space on image
r = r.replace(/\n\n/, "\n").replace(/\n\n/, "\n").replace(/\n\n/, "\n").replace(/\n\n/, "\n").replace(/\n\n/, "\n").replace(/\n\n/, "\n");
console.log(r);