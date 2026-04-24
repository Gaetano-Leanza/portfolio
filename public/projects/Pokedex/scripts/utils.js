export function getTypeColor(typeName) {
  const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };
  return typeColors[typeName] || "#A8A878";
}

export function getTypeSymbol(typeName) {
  const symbols = {
    grass: "🌱",
    fire: "🔥",
    water: "💧",
    electric: "⚡",
    ice: "❄️",
    fighting: "🥊",
    poison: "☠️",
    ground: "⛰️",
    flying: "🕊️",
    psychic: "🔮",
    bug: "🐛",
    rock: "🪨",
    ghost: "👻",
    dark: "🌑",
    steel: "🛡️",
    fairy: "🧚",
    dragon: "🐉",
    normal: "⭐",
  };
  return symbols[typeName] || "❓";
}

export function getTypes(character) {
  return character.types.map(t => {
    const typeName = t.type.name;
    return `<span class="pokemon-type type-${typeName}">${typeName}</span>`;
  }).join(' ');
}

export function formatPokemonData(pokemon) {
  return {
    id: pokemon.id,
    fullName: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    imageUrl: pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default,
    types: pokemon.types,
    primaryType: pokemon.types[0].type.name,
    height: pokemon.height,
    weight: pokemon.weight,
    abilities: pokemon.abilities.map(a => a.ability.name),
    stats: pokemon.stats.map(stat => ({
      name: stat.stat.name,
      base_stat: stat.base_stat
    })),
    speciesUrl: pokemon.species.url
  };
}

export function formatStatName(name) {
  const names = {
    hp: "KP",
    attack: "Angriff",
    defense: "Verteidigung",
    'special-attack': "Spezial-Angriff",
    'special-defense': "Spezial-Verteidigung",
    speed: "Initiative"
  };
  return names[name.toLowerCase()] || name;
}