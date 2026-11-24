// One-Liner Marathon — make.fun entry (@riyan3w / Zallan03)
// Writes one single-line comedy joke to /output/entry.txt.
// Gate: UTF-8 text, 1-280 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I bought a standing desk to fix my posture, and now I just slouch vertically.";

const MIN_LEN = 1;
const MAX_LEN = 280;

function main(): void {
  const line = JOKE.trim();
  if (line.length < MIN_LEN || line.length > MAX_LEN) {
    throw new Error(
      `entry must be ${MIN_LEN}-${MAX_LEN} characters, got ${line.length}`,
    );
  }
  if (!/\S/.test(line)) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  // Write the joke exactly, with no trailing newline, so the file
  // content is byte-for-byte the judged text.
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

main();
