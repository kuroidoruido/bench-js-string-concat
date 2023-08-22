import Chart from "chart.js/auto";

import { basicBarChartOptions } from "../utils/charts";
import { COLORS } from "../utils/colors";
import { sortNumberAsc } from "../utils/sort";

export function executionTimeChart(canvasId, data) {
  const canvas = document.getElementById(canvasId);
  data.sort(sortNumberAsc((x) => x.duration));
  return new Chart(canvas, {
    type: "bar",
    data: {
      labels: data.map(({ type, version }) => `${type} ${version}`),
      datasets: [
        {
          label: "duration in seconds",
          data: data.map(({ duration }) => duration),
          borderWidth: 1,
          backgroundColor: COLORS[0],
        },
      ],
    },
    ...basicBarChartOptions({ aspectRatio: 1.8 }),
  });
}
