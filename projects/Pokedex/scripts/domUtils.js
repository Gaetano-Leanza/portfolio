import {
  getTypeColor,
  getTypes,
  getTypeSymbol,
  formatStatName,
} from "./utils.js";

export function renderPokemonList(container, pokemonList) {
  if (!container) return;
  container.innerHTML = "";
}

export function showLoadingIndicator(container) {
  if (!container) return;
  container.innerHTML = '<div class="loading">Lade Pokémon...</div>';
}

export function showError(container, error) {
  if (!container) return;
  container.innerHTML = `<div class="loading">Fehler beim Laden: ${error.message}</div>`;
}

function generatePokemonCardHTML(character) {
  return `
    <div class="card-header">
      <span class="pokemon-id">#${character.id}</span>
      <span class="pokemon-name">${character.fullName}</span>
    </div>
    <div class="card-content">
      <div class="img-container">
        <img src="${character.imageUrl}" alt="${
    character.fullName
  }" onerror="this.src='fallback-image.png'">
      </div>
      <div class="pokemon-info">
        Typ: ${getTypes(character)}
      </div>
    </div>
    <div class="card-footer">
      ${character.types.map(createTypeSymbolElement).join("")}
    </div>
  `;
}

export function createPokemonCard(character) {
  const card = document.createElement("div");
  card.className = `character-card type-${character.primaryType}`;
  card.dataset.primaryColor = getTypeColor(character.primaryType);
  card.innerHTML = generatePokemonCardHTML(character);
  return card;
}

function createTypeSymbolElement(type) {
  const typeName = type.type.name;
  const color = getTypeColor(typeName);
  return `<div class="type-symbol" style="background-color: ${color}">${getTypeSymbol(
    typeName
  )}</div>`;
}

function generatePokemonModalHTML(pokemon) {
  const typeSymbols = pokemon.types.map(createTypeSymbolElement).join("");

  return `
    <div class="modal-top-section">
      <div class="card-header">
        <span class="pokemon-id">#${pokemon.id}</span>
        <span class="pokemon-name">${pokemon.fullName}</span>
      </div>
      <div class="card-content">
        <div class="img-container">
          <img src="${pokemon.imageUrl}" alt="${
    pokemon.fullName
  }" onerror="this.src='fallback-image.png'">
        </div>
        <div class="pokemon-info">
          Typ: ${getTypes(pokemon)}
        </div>
      </div>
      <div class="card-footer">
        ${typeSymbols}
      </div>
    </div>
    <div class="modal-bottom-container">
      <div class="button-row">
        <button class="action-btn btn-1">Angriffe</button>
        <button class="action-btn btn-2">Statistiken</button>
        <button class="action-btn btn-3">Evolutionen</button>
      </div>
      <div class="additional-content">
        <p> </p>
      </div>
    </div>
    <button class="nav-arrow arrow-left">←</button>
    <button class="nav-arrow arrow-right">→</button>
    <button class="close-modal">X</button>
  `;
}

export function createPokemonModalCard(pokemon, primaryColor) {
  const card = document.createElement("div");
  card.className = "pokemon-card big-card";
  card.style.backgroundColor = primaryColor;
  card.innerHTML = generatePokemonModalHTML(pokemon);
  return card;
}

function generateStatRowHTML(stat) {
  const statValue = stat.base_stat;
  const statName = stat.name;
  const percentage = Math.min(100, (statValue / 150) * 100);
  const color = statValue < 50 ? "#e74c3c" : "#2ecc71";

  return `
    <div class="stat-row">
      <div class="stat-info">
        <span class="stat-name">${formatStatName(statName)}</span>
        <span class="stat-value">${statValue}</span>
      </div>
      <div class="stat-bar-container">
        <div class="stat-bar" style="width: ${percentage}%; background-color: ${color};"></div>
      </div>
    </div>
  `;
}

export function createStatsContainer(stats) {
  const container = document.createElement("div");
  container.className = "stats-container";
  container.innerHTML = stats.map(generateStatRowHTML).join("");
  return container;
}

export function createEvolutionChainElement(evolutions) {
  const container = document.createElement("div");
  container.className = "evolution-chain";

  evolutions.forEach((evolution, index) => {
    const step = document.createElement("div");
    step.className = "evolution-step";
    step.innerHTML = `
      <img src="${evolution.image}" alt="${evolution.name}" class="evolution-image" onerror="this.src='fallback-image.png'">
      <div class="evolution-name">${evolution.name}</div>
    `;
    container.appendChild(step);

    if (index < evolutions.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "evolution-arrow";
      arrow.innerHTML = "⬇️";
      container.appendChild(arrow);
    }
  });

  return container;
}

export function clearSearchResults() {
  const termsContainer = document.getElementById("terms");
  const paginationContainer = document.getElementById("search-pagination");
  const resultsContainer = document.getElementById("search-results");

  if (resultsContainer) {
    resultsContainer.innerHTML = "";
  }

  if (termsContainer) termsContainer.style.display = "grid";
  if (paginationContainer) paginationContainer.innerHTML = "";
}

export function showNoResultsMessage() {
  const termsContainer = document.getElementById("terms");
  const paginationContainer = document.getElementById("search-pagination");
  const resultsContainer = document.getElementById("search-results");

  if (resultsContainer) {
    resultsContainer.innerHTML =
      '<div class="loading">Keine Pokémon gefunden</div>';
    resultsContainer.style.display = "grid";
  }

  if (termsContainer) termsContainer.style.display = "none";
  if (paginationContainer) paginationContainer.style.display = "none";
}
