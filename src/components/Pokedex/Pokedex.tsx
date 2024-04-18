"use client";

import Image from "next/image";
import Card, { Pokemon } from "../Card";

type Props = {
  search: string | undefined;
  pokemon: Pokemon | undefined;
};

const Pokedex = ({ search, pokemon }: Props) => {
  return (
    <>
      {pokemon ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card key={pokemon.id} pokemon={pokemon} />
        </div>
      ) : search ? (
        <div className="flex flex-col justify-center items-center w-full gap-2">
          <p className="text-3xl text-center">
            Pokemon not found, please try again
          </p>
          <Image
            src={"/confused.png"}
            width={220}
            height={220}
            alt="pokemon image"
            className="z-[9999]"
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full gap-2">
          <h1 className="text-3xl text-center">Welcome to the Pokedex</h1>
          <p className="text-center">Search for a Pokemon to get started</p>
          <Image
            src={"/pokedex.png"}
            width={220}
            height={220}
            alt="pokemon image"
            className="z-[9999]"
          />
        </div>
      )}
    </>
  );
};

export default Pokedex;
