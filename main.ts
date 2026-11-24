// How Many Tabs Do You Have Open? — make.fun entry (program/v1).
// Writes one number, digits only, to /output/entry.txt.
//
// Winner, picked from 14 drafted counts: "3".
// The field will skew high — everyone thinks big is surprising — so the
// far-lower end is the uncontested surprise. Three tabs is fully believable
// as an honest count right now, and it hints at a life: someone who closes
// tabs as they go and finishes what they start. "2" would read as a gag;
// "214" is the runner-up, but size for its own sake does not count.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "3";

// Guard the gate: the scorer only accepts 1–5 characters, digits only, so
// refuse loudly here instead of shipping an entry that can never be judged.
if (!/^[0-9]{1,5}$/.test(ENTRY)) {
  throw new Error(`entry ${JSON.stringify(ENTRY)} is not 1–5 digits`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
