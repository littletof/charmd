import {snap} from 'https://deno.land/x/snapper@v0.0.6/mod.ts';
import { renderMarkdown } from "../mod.ts";

// Usage:
// 1. have deno Puppeteer installed
// 2. deno run -A --unstable .\docs\snapper.ts

let md = Deno.readTextFileSync('docs/docs.md');
let r = renderMarkdown(md);
// remove empty lines after header, to save space on image
r = r.replace(/\n\n/, "\n").replace(/\n\n/, "\n").replace(/\n\n/, "\n").replace(/\n\n/, "\n").replace(/\n\n/, "\n").replace(/\n\n/, "\n").replace(/_{25}/, '');


await snap([
    {content: r, imageSavePath: 'docs/showcase.png', viewport: {width: 675}}
]);