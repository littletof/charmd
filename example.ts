import {renderMarkdown} from './mod.ts';

const demoText = `
# deno terminal markdown

This is an example, to showcase https://github.com/littletof/terminal_markdown

If you want to test the module with your own markdown, provide its \`path\` as an argument and make sure \`--allow-read\` is also provided.
\`\`\`bash
deno run --allow-read https://raw.githubusercontent.com/littletof/terminal_markdown/master/mod.ts .\/README.md
\`\`\`

## Headers

# h1 Heading

h1 Heading with ===
===

## h2 Heading

h2 Heading with ---
---

### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

---

## Emphasis

**This is bold text \`\*\*\`**

__This is bold text \`\_\_\`__

*This is italic text \`\*\`*

_This is italic text \`\_\`_

**an *italic* in bold**

> 🔺 no strikethrough or underline, and some combinations doesnt work properly currently

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

> Some quote
and more

>> Another quote

> Some quote
> with **bold** and \`block\`
> > and Another quote
>> >> #### and some more quote

## Lists

> 🔺 problems with multitabbed lists, extra list numbering and list following another one

### Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
  - Indented list item:
    * Subsublist item
    + Subsublist item
+ Main list item

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

### Task List

- [x] Some
- [ ] Other


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

No syntax highlighting

\`\`\`ts
function sum(...nums: number[]): number {
  return nums.reduce((sum, num) => sum + num, 0);
}

let a: number = 1;
let b: number = 2;
let result: number = sum(a, b);

console.log(\`\${ a } + \${ b } = \${ result }\`);
\`\`\`

## Horizontal Rules

___

---

***

* * *

** ** ** ** **

--------------------

## Tables

> 🔺 Currently tables are presented without formatting.

|   a   |   b   |   c   |
| ----- | :---: | ----: |
|  123  |  456  |  789  |
|  ABC  |  DEF  |  GHI  |

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[Deno](https://deno.land)
[Bottom](#bottom)
[LinkReference]

[LinkReference]: https://deno.land/x

[link with title](https://deno.land "title text!")
Autoconverted link https://deno.land

## Images

![Deno](https://deno.land/logo.svg)
![Deno](https://deno.land/logo.svg "The Deno logo")

![Alt text][id]

[id]: https://deno.land/logo.svg  "Deno logo"

## HTML

<h2>HTML</h2>
<hr />
<div>Some \`&lt;div&gt;\` tag</div>
<strong>and **\<strong>** tag</strong>
<br />
<footer align="center" id="bottom">
  <a href="#headers-">
    <strong>Top</strong>
    <i class="fas fa-chevron-up"></i>
  </a>
</footer>


---

`;

let md;
if(Deno.args[0]) {
    md = Deno.readTextFileSync(Deno.args[0]);
} else {
    md = demoText;
}

// renderMarkdown(md)
console.log(renderMarkdown(md));