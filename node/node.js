import { writeFileSync } from "node:fs";
import { runBench } from "./bench.js";

const res = runBench();

writeFileSync("../output/node.json", JSON.stringify(res, undefined, 2), { encoding: "utf-8" });
