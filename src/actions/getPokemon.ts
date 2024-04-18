"use server";

export async function getPokemon({ query = "" }: { query: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  let apiUrl = `${baseUrl}/api/pokemon?name=${query.toLowerCase()}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    data.pokemon.abilities.sort((a: any, b: any) =>
      a.ability.name.localeCompare(b.ability.name)
    );

    return data.pokemon;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function fetchPokemon({ search = "" }: { search?: string }) {
  try {
    const pokemonData = await getPokemon({ query: search });
    return pokemonData;
  } catch (error) {
    console.log(error);
    return null;
  }
}
