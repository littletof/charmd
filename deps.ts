export  * as colors from 'https://deno.land/std@0.82.0/fmt/colors.ts';

// import * as mdast from 'https://jspm.dev/mdast-util-from-markdown@0.8.4';
import {mdast} from './mdast-util-from-markdown@0_8_4-shimmed.js';
export type mdastFromMarkdownFn = (markdown: string, encodig?: any, options?: {extensions?: any[], mdastExtensions?: any[]}) => any;
export const fromMarkdown: mdastFromMarkdownFn = mdast as mdastFromMarkdownFn;
