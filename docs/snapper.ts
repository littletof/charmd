import { snap } from 'https://deno.land/x/snapper@v0.0.6/mod.ts';
import { renderMarkdown } from "../mod.ts";

// Usage:
// 1. have deno Puppeteer installed
// 2. deno run -A --unstable .\docs\snapper.ts
// https://www.diffchecker.com/image-compare/

const md = Deno.readTextFileSync('docs/docs.md');
let r = renderMarkdown(md, { lineWidth: 69 });

// remove empty lines after headers to save space on image
for(let i = 0; i < 6; i++) {
    r = r.replace(/\n\n/, "\n");
}

await snap([
    {content: r, imageSavePath: 'docs/showcase.png', viewport: {width: 675}}
]);