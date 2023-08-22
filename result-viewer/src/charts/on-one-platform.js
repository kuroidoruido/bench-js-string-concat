import Chart from "chart.js/auto";

import { basicBarChartOptions } from "../utils/charts";
import { COLORS } from "../utils/colors";
import { groupBy } from "../utils/groupBy";
import { unique } from "../utils/unique";
import { appendCanvas, appendH3, appendSection } from "../utils/elements";

export function onOnePlatformChart(chartName, rawData) {
  appendSection("by-browser", `${chartName}-container`);
  appendH3(`${chartName}-container`, `Bench on ${chartName} (less is better)`);
  const canvas = appendCanvas(`${chartName}-container`, chartName);
  const grouped = Object.entries(groupBy(rawData, (item) => item.benchLenght));
  const data = grouped.map(([groupKey, groupItems]) => [groupKey, groupBy(groupItems, (item) => item.benchName)]);
  const benchNames = unique(rawData.map((x) => x.benchName));
  const labels = data.map(([label]) => label);
  const datasets = benchNames.map((benchName, benchIndex) => ({
    label: benchName,
    data: data.map(([, group]) => group[benchName].map((x) => x.duration)),
    borderWidth: 1,
    backgroundColor: COLORS[benchIndex],
  }));
  return new Chart(canvas, {
    type: "bar",
    data: { labels, datasets },
    ...basicBarChartOptions(),
  });
}
