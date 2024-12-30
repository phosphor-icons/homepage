import fs from "node:fs";
import path from "node:path";

const README_PATH = "README.md";
const FUNDING_PATH = ".github/FUNDING.yaml";
const LOGO_PATH = ".github/logo.png";

const SYNC_SECTIONS = ["LOGO", "OVERVIEW", "LINKS"];
const SYNC_FILES: Array<string | Array<string>> = [
  [FUNDING_PATH, ".github/FUNDING.yml"],
  [LOGO_PATH, "meta"],
]; // These files will be replaced in the target repository

(function main() {
  const targetRepo = process.argv[process.argv.length - 1];
  if (!targetRepo) throw new Error("Target repository not provided");

  const readmePath = path.resolve(__dirname, `../${README_PATH}`);
  const readmeContent = fs.readFileSync(readmePath, "utf8");

  const targetReadmePath = path.resolve(__dirname, `../../${targetRepo}/${README_PATH}`);
  if (!fs.existsSync(targetReadmePath)) throw new Error(`README.md not found in ${targetRepo}`);

  for (const section of SYNC_SECTIONS) {
    const readmeSection = extractSection(readmeContent, section);
    if (readmeSection) {
      const targetReadmeContent = fs.readFileSync(targetReadmePath, "utf8");
      const updatedDocsContent = updateSection(targetReadmeContent, section, readmeSection);
      fs.writeFileSync(targetReadmePath, updatedDocsContent);
    }
  }

  for (const file of SYNC_FILES) {
    const fileName = Array.isArray(file) ? file[0] : file;
    const filePath = path.resolve(__dirname, `../${fileName}`);
    const fileContent = fs.readFileSync(filePath);

    // If target file has aliases, remove them
    if (Array.isArray(file)) {
      for (const alias of file) {
        const targetPath = path.resolve(__dirname, `../../${targetRepo}/${alias}`);
        if (fs.existsSync(targetPath)) {
          fs.rmSync(targetPath, { recursive: true });
        }
      }
    }

    // Write the target file and intermediate directories, or overwrite if it already exists
    const targetPath = path.resolve(__dirname, `../../${targetRepo}/${fileName}`);
    if (!fs.existsSync(path.dirname(targetPath))) {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    }
    fs.writeFileSync(targetPath, fileContent);
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
