import { useState } from "react";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import Type from "../Type";
import { Pokemon, PokemonData } from "@/src/components/Card/Card.types";

type Props = {
  pokemon: Pokemon;
};

const Card = ({ pokemon }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const flipCard = async () => {
    setIsFlipped(!isFlipped);
    await controls.start({ rotateY: isFlipped ? 0 : 180 });
  };

  const formatPokemonNumber = (number: number): string => {
    return `#${String(number).padStart(4, "0")}`;
  };

  const formatMeasurement = (value: number, unit: string): string => {
    return `${value} ${unit}`;
  };

  return (
    <div className="flex items-center justify-center flex-col relative">
      <motion.div
        className="cursor-pointer"
        animate={controls}
        onClick={flipCard}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={
            !isFlipped
              ? "bg-red-700 flex items-center rounded-md p-6 relative"
              : "bg-[#F7CD46] flex items-center rounded-md p-6 relative"
          }
          initial={{ rotateY: 0 }}
          variants={{
            front: { rotateY: 0 },
            back: { rotateY: 180 },
          }}
          animate={isFlipped ? "back" : "front"}
        >
          <div className="absolute top-0 left-0 text-white font-bold p-3 text-xl">
            {!isFlipped && formatPokemonNumber(pokemon.id)}
          </div>
          <div className="absolute top-2 right-2 text-white font-bold p-3 text-xl">
            <Image
              src="/pokeball.png"
              width={100}
              height={100}
              alt="pokeball"
              className="absolute top-0 right-0"
            />
          </div>
          {!isFlipped ? (
            <div className="flex flex-col gap-2">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.id}.png`}
                width={220}
                height={220}
                alt="pokemon image"
                className="z-[9999]"
              />

              <span className="font-bold text-2xl px-1 rounded-md my-5 uppercase text-white">
                {pokemon.name}
              </span>
              <div className="flex gap-5">
                {pokemon?.types &&
                  pokemon.types.map((type, index) => (
                    <Type
                      key={index}
                      typeName={
                        type.type.name as
                          | "fire"
                          | "grass"
                          | "water"
                          | "electric"
                          | "poison"
                      }
                    />
                  ))}
              </div>
            </div>
          ) : (
            <div className="w-[220px] h-[320px] bg-[#F7CD46] rounded-lg flex flex-col items-center gap-6 justify-center">
              <div>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.id}.png`}
                  width={120}
                  height={120}
                  alt="pokemon image"
                  className="z-[9999]"
                />
              </div>
              <div className="text-white flex flex-col w-full px-3 items-start gap-6">
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-xl uppercase">Abilities</h3>
                  {pokemon?.abilities &&
                    pokemon.abilities.map((ability, index) => (
                      <span key={index}>{ability.ability.name}</span>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                  <p className="bg-yellow-600 px-2 rounded-md text-sm">
                    Height:{" "}
                    {pokemon?.height &&
                      formatMeasurement(pokemon.height / 10, "meters")}
                  </p>
                  <p className="bg-yellow-600 px-2 rounded-md text-sm">
                    Weight:{" "}
                    {pokemon?.weight &&
                      formatMeasurement(pokemon.weight / 10, "meters")}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
