import Chart from "chart.js/auto";

import { basicBarChartOptions } from "../utils/charts";
import { COLORS } from "../utils/colors";
import { groupBy } from "../utils/groupBy";
import { sortNumberAsc } from "../utils/sort";
import { unique } from "../utils/unique";
import { appendCanvas, appendH3, appendSection } from "../utils/elements";

export function oneBenchChart(benchName, rawData) {
  appendSection("by-bench", `${benchName}-container`);
  appendH3(`${benchName}-container`, `Bench ${benchName} (less is better)`);
  const canvas = appendCanvas(`${benchName}-container`, benchName);
  const browserNames = Object.keys(rawData);
  const labels = unique(rawData[browserNames[0]].map((x) => x.benchLenght));
  const datasets = browserNames.map((browserName, benchIndex) => ({
    label: browserName,
    data: rawData[browserName].filter((x) => x.benchName === benchName).map((x) => x.duration),
    borderWidth: 1,
    backgroundColor: COLORS[benchIndex],
  }));
  console.log(benchName, { datasets });
  return new Chart(canvas, {
    type: "bar",
    data: { labels, datasets },
    ...basicBarChartOptions(),
  });
}
