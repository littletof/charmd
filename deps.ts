export * as colors from "jsr:@std/fmt@0.223.0/colors";

import { gfmStrikethrough, gfmStrikethroughFromMarkdown, mdast } from "./mdast-util-from-markdown@1_2_0-shimmed.js";
export const strikethroughExt = gfmStrikethroughFromMarkdown;
export const strike = gfmStrikethrough;
export type mdastFromMarkdownFn = (
  markdown: string,
  encodig?: string,
  // deno-lint-ignore no-explicit-any
  options?: { extensions?: any[]; mdastExtensions?: any[] },
  // deno-lint-ignore no-explicit-any
) => any;
export const fromMarkdown: mdastFromMarkdownFn = mdast;
