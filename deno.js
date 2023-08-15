import { runBench } from "./bench.js";

const res = runBench();

await Deno.writeTextFile("./output/deno.json", JSON.stringify(res, undefined, 2));
