import { showNoResultsMessage, clearSearchResults } from './domUtils.js';
import { fetchAllPokemonBasic, fetchPokemonDetails } from './api.js';
import { formatPokemonData } from './utils.js';
import { renderPaginationControls, goToPrevPage, goToNextPage } from './pagination.js';
import { renderPokemonList } from './main.js';


export let allPokemonBasic = [];
export let searchResultsData = [];
let currentSearchPage = 0;
const searchItemsPerPage = 5;

const resultsContainer = document.getElementById("search-results");

export async function handleSearch(query) {
  if (query.length < 3) {
    if (query.length === 0) clearSearchResults();
    return;
  }
  window.location.href = `search-content.html?q=${encodeURIComponent(query)}`;
}

export async function handleInitialSearch(query) {
  if (!query) return;

  if (allPokemonBasic.length === 0) {
    allPokemonBasic = await fetchAllPokemonBasic();
  }

  const filtered = allPokemonBasic.filter(p => p.name.includes(query.toLowerCase()));
  
  if (filtered.length === 0) {
    showNoResultsMessage();
  } else {
    const details = await Promise.all(filtered.map(p => fetchPokemonDetails(p.url)));
    searchResultsData = details.map(formatPokemonData);
    currentSearchPage = 0;
    return searchResultsData;
  }
}

export function getSearchQueryFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('q')?.trim().toLowerCase() || "";
}

export function renderSearchResultsPage(page) {
  const start = page * searchItemsPerPage;
  const end = start + searchItemsPerPage;
  const pageData = searchResultsData.slice(start, end);
  const hasNextPage = end < searchResultsData.length;
  const termsContainer = document.getElementById("terms");

  renderPokemonList(termsContainer, pageData);
  
  renderPaginationControls(
    page > 0,
    hasNextPage,
    () => goToPrevPage(page, renderSearchResultsPage),
    () => goToNextPage(page, hasNextPage, renderSearchResultsPage),
    true
  );
}

