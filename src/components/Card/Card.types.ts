export interface Ablility {
  ability: {
    name: string;
  };
}

export interface PokemonData {
  height: number;
  weight: number;
  abilities: Ablility[];
  types: { type: { name: string } }[];
}

export interface Pokemon {
  id: number;
  url: string;
  name: string;
  height: number;
  weight: number;
  abilities: Ablility[];
  types: { type: { name: string } }[];
}
