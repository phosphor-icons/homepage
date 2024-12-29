import fs from "node:fs";
import path from "node:path";

const SYNC_SECTIONS = ["LINKS"];

(function main() {
  const targetRepo = process.argv[process.argv.length - 1];
  if (!targetRepo) throw new Error("Target repository not provided");

  const targetReadmePath = path.resolve(__dirname, `../../${targetRepo}/README.md`);
  if (!fs.existsSync(targetReadmePath)) throw new Error(`README.md not found in ${targetRepo}`);

  const readmePath = path.resolve(__dirname, "../README.md");
  const readmeContent = fs.readFileSync(readmePath, "utf8");

  for (const section of SYNC_SECTIONS) {
    const sectionContent = extractSection(readmeContent, section);
    if (!sectionContent) continue;

    const targetReadmeContent = fs.readFileSync(targetReadmePath, "utf8");
    const updatedDocsContent = updateSection(targetReadmeContent, section, sectionContent);
    fs.writeFileSync(targetReadmePath, updatedDocsContent);
  }
})();

function extractSection(content: string, section: string) {
  const pattern = new RegExp(
    `<!-- BEGIN_${section} -->\n([\\s\\S]*)\n<!-- END_${section} -->`,
    "g",
  );
  const match = pattern.exec(content);
  return match?.[1];
}

function updateSection(content: string, section: string, newContent: string) {
  const pattern = new RegExp(
    `<!-- BEGIN_${section} -->\n([\\s\\S]*)\n<!-- END_${section} -->`,
    "g",
  );
  return content.replace(pattern, `<!-- BEGIN_${section} -->\n${newContent}\n<!-- END_${section} -->`);
}
