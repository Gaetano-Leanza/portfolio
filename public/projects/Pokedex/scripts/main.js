import { fetchPokemonList, fetchPokemonDetails, fetchAllPokemonBasic } from './api.js';
import { createPokemonCard, showLoadingIndicator, showError } from './domUtils.js';
import { renderPaginationControls, goToPrevPage, goToNextPage } from './pagination.js';
import { handleSearch, handleInitialSearch, getSearchQueryFromUrl, renderSearchResultsPage, searchResultsData } from './search.js';
import { getTypes, getTypeColor, formatPokemonData } from './utils.js';
import { showPokemonCardModal } from './modal.js';

export let currentPokemonList = [];
export let allPokemonBasic = [];
const itemsPerPage = 20;
const resultsContainer = document.getElementById("search-results");
const searchInput = document.getElementById("pokemon-search");

const style = document.createElement("style");
style.textContent = `...`;
document.head.appendChild(style);



export async function fetchDataJson(page = 0) {
  const container = document.getElementById("terms");
  showLoadingIndicator(container);

  try {
    const data = await loadPokemonPageData(page);
    renderPage(container, data, page);
  } catch (error) {
    showError(container, error);
  }
}

async function loadPokemonPageData(page) {
  const offset = page * itemsPerPage;
  const baseData = await fetchPokemonList(offset, itemsPerPage);

  const details = await Promise.all(baseData.results.map(pokemon => fetchPokemonDetails(pokemon.url)));
  const formatted = details.map(formatPokemonData);
  
  return {
    pokemon: formatted,
    hasNext: baseData.next != null
  };
}

function renderPage(container, data, page) {
  renderPokemonList(container, data.pokemon);
  
  renderPaginationControls(
    page > 0,
    data.hasNext,
    () => fetchDataJson(page - 1),
    () => fetchDataJson(page + 1)
  );
}

export function renderPokemonList(container, pokemonList) {
  if (!container) return;

  container.innerHTML = '';

  if (pokemonList.length === 0) {
    container.innerHTML = '<div class="loading">Keine Pokémon gefunden</div>';
    return;
  }

  pokemonList.forEach(character => {
    const card = createPokemonCard(character);
    card.pokemonData = character;

    card.addEventListener('click', (e) => {
      const currentList = getCurrentPokemonList();
      showPokemonCardModal(character, e.currentTarget, currentList);
    });

    container.appendChild(card);
  });
}

function getCurrentPokemonList() {
  if (window.location.pathname.includes("search-content.html")) {
    return searchResultsData;
  }
  
  const container = document.getElementById("terms");
  return container ? Array.from(container.children).map(card => card.pokemonData) : [];
}

async function initSearchPage() {
  const query = getSearchQueryFromUrl();
  await handleInitialSearch(query);
  
  renderSearchResultsPage(0);
  
  if (searchInput) {
    searchInput.value = query;
    searchInput.addEventListener('input', () => {
      handleSearch(searchInput.value.trim().toLowerCase());
    });
  }
  
  const backButton = document.getElementById("back-to-home");
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = "index.html";
    });
  }
}

async function init() {
  if (allPokemonBasic.length === 0) {
    allPokemonBasic = await fetchAllPokemonBasic();
  }

  if (window.location.pathname.includes("search-content.html")) {
    await initSearchPage();
  } else {
    fetchDataJson();
    
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        handleSearch(searchInput.value.trim().toLowerCase());
      });
    }
  }
}

init();