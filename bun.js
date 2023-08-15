import { runBench } from "./bench.js";

const res = runBench();

await Bun.write("./output/bun.json", JSON.stringify(res, undefined, 2));
