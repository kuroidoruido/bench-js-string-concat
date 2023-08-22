import "./style.css";

import bunOutput from "../../output/bun.json";
import chromiumOutput from "../../output/chromium.json";
import denoOutput from "../../output/deno.json";
import execOutput from "../../output/exec.json";
import firefoxOutput from "../../output/firefox.json";
import nodeOutput from "../../output/node.json";
import { executionTimeChart } from "./charts/execution-time";
import { onOnePlatformChart } from "./charts/on-one-platform";
import { oneBenchChart } from "./charts/one-bench";
import { unique } from "./utils/unique";

document.querySelector("#app").innerHTML = `
  <h1>Bench results</h1>

  <h2>Context</h2>

  <ul>
    <li>OS: ArchLinux (kernel 6.3.2-arch1-1 / 64bits)</li>
    <li>CPU: Intel i7-1165G7</li>
    <li>RAM: 16Go (LPDDR4 4267MHz)</li>
  </ul>

  <h2>Full bench execution time (less is better)</h2>
  <canvas id="executionTime"></canvas>

  <section id="by-browser">
    <h2>By platform</h2>
  </section>
  <section id="by-bench">
    <h2>By concat method</h2>
  </section>
`;

executionTimeChart("executionTime", execOutput);
// by platform
onOnePlatformChart("Bun", bunOutput);
onOnePlatformChart("Deno", denoOutput);
onOnePlatformChart("Node", nodeOutput);
onOnePlatformChart("Chromium", chromiumOutput);
onOnePlatformChart("Firefox", firefoxOutput);
// by concat method
const allBrowsers = {
  bun: bunOutput,
  deno: denoOutput,
  node: nodeOutput,
  chromium: chromiumOutput,
  firefox: firefoxOutput,
};
unique(bunOutput.map((x) => x.benchName)).forEach((benchName) => {
  oneBenchChart(benchName, allBrowsers);
});
