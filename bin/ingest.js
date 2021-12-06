#!/usr/bin/env node
const fs = require("fs/promises");
const path = require("path");
const axios = require("axios");
const chalk = require("chalk");

const ICON_API_URL = "https://api.phosphoricons.com";
const PARAMS = new URLSearchParams([["release", "1.4"]]).toString();

async function main() {
  try {
    const res = await axios.get(`${ICON_API_URL}?${PARAMS}`);
    if (res.data) {
      let fileString = `\
import * as Icons from "phosphor-react";
import { IconEntry, IconCategory } from ".";

export const icons: ReadonlyArray<IconEntry> = [
`;

      res.data.icons.forEach((icon) => {
        let categories = "[";
        icon.searchCategories?.forEach((c) => {
          categories += `IconCategory.${c.toUpperCase()},`;
        });
        categories += "]";

        fileString += `\
  {
    name: "${icon.name}",
    categories: ${categories},
    tags: ${JSON.stringify(["*new*", ...icon.tags])},
    Icon: Icons.${icon.name
      .split("-")
      .map((substr) => substr.replace(/^\w/, (c) => c.toUpperCase()))
      .join("")},
  },
`;
        console.log(`${chalk.inverse.green(" DONE ")} ${icon.name}`);
      });

      fileString += `
];

if (process.env.NODE_ENV === "development") {
  console.log(\`\${icons.length} icons\`);
}

export const iconCount = (icons.length * 6)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

`;

      try {
        await fs.writeFile(
          path.join(__dirname, "../src/lib/new.ts"),
          fileString
        );
        console.log(
          `${chalk.green(" DONE ")} ${res.data.icons.length} icons ingested`
        );
      } catch (e) {
        console.error(`${chalk.inverse.red(" FAIL ")} Could not write file`);
      }
    } else {
      console.error(`${chalk.inverse.red(" FAIL ")} No data`);
    }
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
}

main();
