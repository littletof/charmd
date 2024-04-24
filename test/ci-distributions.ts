[
  "../mod.ts",
  "https://deno.land/x/charmd/mod.ts",
  "jsr:@littletof/charmd",
].forEach((distro) => {
  Deno.test(distro, async () => {
    const dist = await import(distro);
    const _rendered = dist.renderMarkdown(`### ${distro}`);
  });
});
