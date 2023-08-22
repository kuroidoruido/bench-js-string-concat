export function appendCanvas(parentId, canvasId) {
  const canvas = document.createElement("canvas");
  canvas.id = canvasId;
  document.getElementById(parentId).appendChild(canvas);
  return canvas;
}

export function appendH3(parentId, title) {
  const h3 = document.createElement("h3");
  h3.textContent = title;
  document.getElementById(parentId).appendChild(h3);
  return h3;
}

export function appendSection(parentId, sectionId) {
  const section = document.createElement("section");
  section.id = sectionId;
  document.getElementById(parentId).appendChild(section);
  return section;
}
