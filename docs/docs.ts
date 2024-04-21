import { renderMarkdown } from "../mod.ts";

const md = Deno.readTextFileSync("docs/docs.md");
let r = renderMarkdown(md);
// remove empty lines after headers to save space on image
for (let i = 0; i < 6; i++) {
  r = r.replace(/\n\n/, "\n");
}
console.log(r);
