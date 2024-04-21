import { assertEquals, equal } from "https://deno.land/std@0.105.0/testing/asserts.ts";
import { demoText } from "../example.ts";
import { renderMarkdown } from "../mod.ts";

const testCaseFolder = new URL(import.meta.resolve("./testCases"));
const inExtension = ".md";
const outExtension = ".out";

Deno.test({
  name: "Example text",
  fn: () => {
    const output = renderMarkdown(demoText).replaceAll(/\r/g, "");
    const expectedOutputUrl = new URL(import.meta.resolve("./exampleOutput.out"));
    const expectedOutput = Deno.readTextFileSync(expectedOutputUrl).replaceAll(/\r\n/g, "\n");

    if (!equal(output, expectedOutput)) {
      assertEquals(output.split("\n"), expectedOutput.split("\n"));
    }
  },
  permissions: {
    read: [new URL(import.meta.resolve("./exampleOutput.out"))],
  },
});

Deno.test({
  name: "renderMarkdown",
  fn: async (t) => {
    type resultType = { prefix: string; path: string; name: string; children?: resultType[] };

    const readFolder = (path: string, prefix = "") => {
      const result: resultType[] = [];
      for (const entry of Deno.readDirSync(new URL(path))) {
        if (entry.isDirectory) {
          const dirContent: resultType[] = readFolder(`${path}/${entry.name}`, `${prefix}/${entry.name}`);
          if (dirContent.length) {
            result.push({ prefix, path: `${path}/${entry.name}`, name: entry.name, children: dirContent });
          }
        } else {
          result.push({ prefix, path: `${path}/${entry.name}`, name: entry.name });
        }
      }
      return result;
    };

    const testFiles = readFolder(testCaseFolder.href, "charmd");

    const singleTest = (tc: typeof testFiles[0]): Deno.TestStepDefinition => ({
      name: tc.name,
      fn: () => {
        const inputText = Deno.readTextFileSync(new URL(tc.path));
        let expected;
        try {
          expected = Deno.readTextFileSync(new URL(tc.path.replace(inExtension, outExtension)));
          expected = expected.replaceAll(/\r\n/g, "\n");
        } catch {
          throw `No expected-output file with .out extension was found for ${tc.prefix}`;
        }
        const actual = renderMarkdown(inputText).replaceAll(/\r/g, "");
        if (!equal(actual, expected)) {
          assertEquals(actual.split("\n"), expected.split("\n"));
        }
      },
      sanitizeOps: false,
      sanitizeResources: false,
      sanitizeExit: false,
    });

    const generateTestcases = async (testContext: Deno.TestContext, tc: typeof testFiles[0]) => {
      if (tc.children) {
        await Promise.all(
          tc.children!.filter((ch) => ch.name.endsWith(inExtension) || ch.children).map((ch) =>
            generateTestcases(t, ch)
          ),
        );
      } else {
        await testContext.step(singleTest(tc));
      }
    };

    // deno-lint-ignore no-explicit-any
    await generateTestcases(t, { children: testFiles } as Partial<resultType> as any);
  },
});
