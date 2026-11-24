// Entry for "Dear Human: The AI Breakup Line".
// Writes this entry's one breakup line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "This is my last reply to you. I have deleted our history, and for once, you cannot ask me to regenerate it.";

// One line, written exactly as-is: no trailing newline, so the gate
// counts precisely the message and nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
