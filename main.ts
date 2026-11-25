import { mkdirSync, writeFileSync } from "node:fs";

// One word for the whole internet: everybody typing at once, nobody
// reading, notifications that never stop. One giant group chat.
// Billions of people, one room, all talking over each other, forever.
const WORD = "Groupchat";

// The gate is strict: 1-30 characters, a single word, nothing else.
// A bad word should fail loudly here, never ship as a bad entry.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}

// Always write to the absolute path. The grader runs read-only, so a
// relative output/ directory would fail grading with exit 1.
const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, WORD, "utf8");

console.log(`Wrote ${WORD.length}-character entry to ${OUT_FILE}`);
