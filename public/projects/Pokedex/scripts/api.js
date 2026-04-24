export async function fetchPokemonMoves(pokemonId) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
  const data = await response.json();
  return data.moves.slice(0, 10).map((move) => move.move.name);
}

export async function fetchPokemonEvolutions(speciesUrl) {
  try {
    const speciesData = await fetchSpeciesData(speciesUrl);
    const evolutionData = await fetchEvolutionChain(speciesData.evolution_chain.url);
    return await extractEvolutions(evolutionData.chain);
  } catch (error) {
    console.error("Fehler beim Laden der Evolutionen:", error);
    return [];
  }
}

async function fetchSpeciesData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function fetchEvolutionChain(url) {
  const response = await fetch(url);
  return await response.json();
}

async function extractEvolutions(chain) {
  const evolutions = [];

  async function processChain(chainNode) {
    const pokemonData = await fetchPokemonData(chainNode.species.name);
    evolutions.push({
      name: chainNode.species.name,
      id: pokemonData.id,
      image: getPokemonImage(pokemonData),
    });

    if (chainNode.evolves_to && chainNode.evolves_to.length > 0) {
      await processChain(chainNode.evolves_to[0]);
    }
  }

  await processChain(chain);
  return evolutions;
}

export async function fetchPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
  return await response.json();
}

function getPokemonImage(pokemonData) {
  return (
    pokemonData.sprites?.other?.["official-artwork"]?.front_default ||
    pokemonData.sprites?.front_default ||
    null
  );
}

export async function fetchPokemonList(offset, limit) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const response = await fetch(url);
  return await response.json();
}

export async function fetchAllPokemonBasic() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
    const data = await response.json();
    return data.results;
  } catch (error) {
    return [];
  }
}

export async function fetchPokemonDetails(url) {
  const response = await fetch(url);
  return await response.json();
}