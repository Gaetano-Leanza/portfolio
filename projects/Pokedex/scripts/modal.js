import { fetchPokemonMoves, fetchPokemonEvolutions } from './api.js';
import { createPokemonModalCard, createStatsContainer, createEvolutionChainElement } from './domUtils.js';
import { getTypeColor } from './utils.js';

let activeModal = null;

function activateButton(button) {
  const buttons = button.parentElement.querySelectorAll('button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

function setActiveButton(card, activeClass) {
  const buttons = card.querySelectorAll('.btn-1, .btn-2, .btn-3');
  buttons.forEach(btn => btn.classList.remove('active-button'));
  const activeBtn = card.querySelector(`.${activeClass}`);
  if (activeBtn) activeBtn.classList.add('active-button');
}


export function showPokemonCardModal(pokemonData, clickedCard, currentList) {
  if (activeModal) return;
  
  document.body.style.overflow = "hidden";
  
  const overlay = createModalOverlay();
  const primaryColor = getPrimaryColor(clickedCard, pokemonData);
  const card = createPokemonModalCard(pokemonData, primaryColor);
  const modal = createModalContainer(card);
  
  composeModalElements(overlay, modal, card);
  setActiveModalState(overlay, pokemonData, currentList);
  
  setupModalEventListeners(overlay, modal, card);
  setupNavigation(card, currentList, pokemonData);
  setupButtonActions(card, pokemonData);
  
  const attackButton = card.querySelector('.btn-1');
  if (attackButton) {
    activateButton(attackButton);
    attackButton.click();
  }
}

function createModalOverlay() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  return overlay;
}

function getPrimaryColor(clickedCard, pokemonData) {
  return clickedCard?.dataset.primaryColor || getTypeColor(pokemonData.primaryType);
}

function createModalContainer(cardContent) {
  const modal = document.createElement("div");
  modal.className = "pokemon-modal";
  modal.appendChild(cardContent);
  return modal;
}

function composeModalElements(overlay, modal, card) {
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

function setActiveModalState(overlay, pokemonData, currentList) {
  activeModal = { 
    overlay, 
    currentPokemon: pokemonData, 
    currentList 
  };
}

function setupModalEventListeners(overlay, modal, card) {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hidePokemonCardModal();
  });

  card.querySelector('.close-modal').addEventListener('click', hidePokemonCardModal);
  modal.addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('keydown', handleEscape);
}

function setupNavigation(card, currentList, pokemonData) {
  const currentIndex = currentList.findIndex(p => p.id === pokemonData.id);
  
  card.querySelector('.arrow-left').addEventListener('click', () => {
    if (currentIndex > 0) {
      const prevPokemon = currentList[currentIndex - 1];
      updateModalContent(prevPokemon, currentList);
    }
  });
  
  card.querySelector('.arrow-right').addEventListener('click', () => {
    if (currentIndex < currentList.length - 1) {
      const nextPokemon = currentList[currentIndex + 1];
      updateModalContent(nextPokemon, currentList);
    }
  });
  
  updateArrowVisibility(card, currentIndex, currentList.length);
}

function setupButtonActions(card, pokemonData) {
  const additionalContent = getAdditionalContentContainer(card);
  
  attachMovesButtonAction(card, additionalContent, pokemonData.id);
  attachStatsButtonAction(card, additionalContent, pokemonData.stats);
  attachEvolutionsButtonAction(card, additionalContent, pokemonData.speciesUrl);
}

function getAdditionalContentContainer(card) {
  return card.querySelector('.additional-content');
}

function attachMovesButtonAction(card, container, pokemonId) {
  const button = card.querySelector('.btn-1');
  button.addEventListener('click', async () => {
    setActiveButton(card, 'btn-1');
    showLoadingState(container, "Lade Attacken...");
    const moves = await fetchPokemonMoves(pokemonId);
    displayMovesList(container, moves);
  });
}

function attachStatsButtonAction(card, container, stats) {
  const button = card.querySelector('.btn-2');
  button.addEventListener('click', () => {
    setActiveButton(card, 'btn-2');
    clearContent(container);
    container.appendChild(createStatsContainer(stats));
  });
}

function attachEvolutionsButtonAction(card, container, speciesUrl) {
  const button = card.querySelector('.btn-3');
  button.addEventListener('click', async () => {
    setActiveButton(card, 'btn-3');
    showLoadingState(container, "Lade Evolutionen...");
    const evolutions = await fetchPokemonEvolutions(speciesUrl);
    displayEvolutions(container, evolutions);
  });
}


function showLoadingState(container, message) {
  container.innerHTML = `<p>${message}</p>`;
}

function clearContent(container) {
  container.innerHTML = '';
}

function displayMovesList(container, moves) {
  if (moves.length === 0) {
    container.innerHTML = "<p>Keine Attacken gefunden.</p>";
    return;
  }
  container.innerHTML = `<ul>${moves.map(move => `<li>${move}</li>`).join('')}</ul>`;
}

function displayEvolutions(container, evolutions) {
  if (evolutions.length === 0) {
    container.innerHTML = "<p>Keine Evolutionen gefunden.</p>";
    return;
  }
  clearContent(container);
  container.appendChild(createEvolutionChainElement(evolutions));
}

function updateModalContent(pokemonData, currentList) {
  if (!activeModal) return;

  const modal = activeModal.overlay.querySelector('.pokemon-modal');
  if (!modal) return;

  const primaryColor = getTypeColor(pokemonData.primaryType);
  const oldCard = modal.querySelector('.pokemon-card');
  if (oldCard) oldCard.remove();

  const newCard = createPokemonModalCard(pokemonData, primaryColor);
  modal.appendChild(newCard);
  activeModal.currentPokemon = pokemonData;

  newCard.querySelector('.close-modal').addEventListener('click', hidePokemonCardModal);
  
  const currentIndex = currentList.findIndex(p => p.id === pokemonData.id);
  setupNavigation(newCard, currentList, pokemonData);
  setupButtonActions(newCard, pokemonData);
  
  const attackButton = newCard.querySelector('.btn-1');
  if (attackButton) {
    activateButton(attackButton);
    attackButton.click();
  }
}

function updateArrowVisibility(card, currentIndex, listLength) {
  const leftArrow = card.querySelector('.arrow-left');
  const rightArrow = card.querySelector('.arrow-right');

  if (leftArrow) leftArrow.style.display = currentIndex > 0 ? 'block' : 'none';
  if (rightArrow) rightArrow.style.display = currentIndex < listLength - 1 ? 'block' : 'none';
}

function handleEscape(e) {
  if (e.key === 'Escape' && activeModal) {
    hidePokemonCardModal();
  }
}

export function hidePokemonCardModal() {
  if (activeModal) {
    activeModal.overlay.remove();
    activeModal = null;
    document.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = "";
  }
}