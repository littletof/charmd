export  * as colors from 'https://deno.land/std@0.105.0/fmt/colors.ts';

import { mdast, gfmStrikethroughFromMarkdown, gfmStrikethrough } from './mdast-util-from-markdown@1_2_0-shimmed.js';
export const strikethroughExt = gfmStrikethroughFromMarkdown;
export const strike = gfmStrikethrough;
// deno-lint-ignore no-explicit-any
export type mdastFromMarkdownFn = (markdown: string, encodig?: string, options?: {extensions?: any[], mdastExtensions?: any[]}) => any;
export const fromMarkdown: mdastFromMarkdownFn = mdast;
