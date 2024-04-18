import { fetchPokemon } from "@/src/actions/getPokemon";
import Pokedex from "@/src/components/Pokedex";
import Search from "@/src/components/Search";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : "";

  const data = await fetchPokemon({ search });

  const pokemon = search && data ? data : undefined;

  return (
    <main className="max-w-[1500px] w-[95%] mx-auto">
      <Search search={search} />
      <ul data-testid="pokedex">
        <Pokedex search={search} pokemon={pokemon} />
      </ul>
    </main>
  );
}
