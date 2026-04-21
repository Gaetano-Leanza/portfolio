export function renderPaginationControls(hasPrevious, hasNext, prevAction, nextAction, isSearchPage = false) {
  const paginationContainer = getPaginationContainer(isSearchPage);
  if (!paginationContainer) return;
  
  paginationContainer.innerHTML = '';
  
  const controls = createControlsElement();
  const backBtn = createPaginationButton("⬅️ Zurück", !hasPrevious, prevAction);
  const nextBtn = createPaginationButton("Weiter ➡️", !hasNext, nextAction);
  
  composePaginationElements(controls, backBtn, nextBtn);
  paginationContainer.appendChild(controls);
}

function getPaginationContainer(isSearchPage) {
  const id = isSearchPage ? "search-pagination" : "pagination";
  return document.getElementById(id);
}

function createControlsElement() {
  const controls = document.createElement("div");
  controls.className = "pagination-controls";
  return controls;
}

function createPaginationButton(text, disabled, clickHandler) {
  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = disabled;
  button.onclick = clickHandler;
  return button;
}

function composePaginationElements(container, ...elements) {
  elements.forEach(element => container.appendChild(element));
}

export function goToPrevPage(currentPage, renderFunction) {
  if (currentPage > 0) {
    renderFunction(currentPage - 1);
  }
}

export function goToNextPage(currentPage, hasNext, renderFunction) {
  if (hasNext) {
    renderFunction(currentPage + 1);
  }
}