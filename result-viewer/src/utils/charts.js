export function basicBarChartOptions({ aspectRatio = 1.2 } = {}) {
  return {
    options: {
      responsive: false,
      aspectRatio,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
}
