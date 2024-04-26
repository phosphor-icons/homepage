import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { icons, IconStyle } from "@phosphor-icons/core";
import IconJar, { IconGroup, IconSet, Icon, License } from "iconjar-exporter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LICENSE_URL = "https://phosphoricons.com/LICENSE";
const OUT_DIR = path.join(__dirname, "../public/assets");
const CORE_DIR = path.join(
  __dirname,
  "../node_modules/@phosphor-icons/core/assets"
);

abstract class Exporter {
  static load(): Promise<void> {
    throw new Error("not implemented");
  }
  static save(): Promise<void> {
    throw new Error("not implemented");
  }
}

class NucleoExporter implements Exporter {
  static JSON_PATH = path.join(OUT_DIR, "./phosphor.nucleo.json");
  static SET_ID = 1;
  static data: {
    sets: Array<{ label: string; id: number }>;
    groups: Array<unknown>;
    icons: Array<{
      name: string;
      content: string;
      style: /* possibly just "outline" and "glyph" */ string;
      tags: /* comma-separated, no spaces */ string;
      set_id: number;
    }>;
  };

  static async load(): Promise<void> {
    NucleoExporter.data = {
      sets: [{ label: "Phosphor Icons", id: NucleoExporter.SET_ID }],
      groups: [],
      icons: [],
    };

    for (const weight of Object.values(IconStyle)) {
      for (const icon of icons) {
        const name =
          weight === "regular" ? icon.name : `${icon.name}-${weight}`;
        const filePath = path.join(CORE_DIR, `${weight}/${name}.svg`);
        const content = (await fs.readFile(filePath)).toString();

        NucleoExporter.data.icons.push({
          name,
          content,
          style: "outline",
          tags: icon.tags.join(","),
          set_id: NucleoExporter.SET_ID,
        });
      }
    }
  }

  static async save(): Promise<void> {
    await fs.writeFile(
      NucleoExporter.JSON_PATH,
      JSON.stringify(NucleoExporter.data)
    );
  }
}

class IconJarExporter implements Exporter {
  static iconJar: IconJar;
  static JAR_PATH = path.join(OUT_DIR, "./phosphor.iconjar");

  static async load(): Promise<void> {
    const now = new Date();
    const license = new License("MIT");
    license.url = LICENSE_URL;
    const sets: Array<IconSet> = [];

    for (const weight of Object.values(IconStyle)) {
      const set = new IconSet(weight);
      set.license = license;
      set;

      for (const icon of icons) {
        const name =
          weight === "regular" ? icon.name : `${icon.name}-${weight}`;
        const filePath = path.join(CORE_DIR, `${weight}/${name}.svg`);
        const entry = new Icon(name, filePath, Icon.TYPE_SVG);
        entry.addTags(icon.tags as unknown as string[]);
        entry.unicode = icon.codepoint.toString(16);
        entry.license = license;
        entry.date = now;
        set.addIcon(entry);
      }

      sets.push(set);
    }

    const group = new IconGroup("Phosphor Icons");
    for (const set of sets) {
      group.addSet(set);
    }

    IconJarExporter.iconJar = new IconJar("phosphor", [group]);
  }

  static async save(): Promise<void> {
    await fs.rm(IconJarExporter.JAR_PATH, { recursive: true, force: true });
    IconJarExporter.iconJar.save(OUT_DIR);
  }
}

(async function main() {
  for (const exporter of [IconJarExporter, NucleoExporter]) {
    await exporter.load();
    await exporter.save();
  }
})();
