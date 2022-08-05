import {renderMarkdown} from './mod.ts';

if(!Deno.args) {
    throw Error('Please provide a path or url to a file or a markdown string');
} else {
    if(!Deno.args[0] || !Deno.args[1]) {
        throw Error("Please provide -l, -r and a path, or -s and a markdown string as arguments");
    }

    let text;
    switch(Deno.args[0]) {
        case '-l':
            text = Deno.readTextFileSync(Deno.args[1]);
            break;
        case '-r': {
            const resp = await fetch(Deno.args[1]);
            text = await resp.text();
            break;
        }
        case '-s':
            text = Deno.args[1];
            break;
        default:
            throw Error('Only -l, -r and -s is allowed');
    }

    console.log(renderMarkdown(text));
}