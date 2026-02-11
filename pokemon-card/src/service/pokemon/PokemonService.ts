import { PokemonInterface } from "../../types/pokemon/PokemonInterface";
import Pokemons from "./../../data/Pokemons.json"
export default class PokemonService {
    static getAllPokemons() : PokemonInterface[] {
        return Pokemons;
    }

    static getPokemonById(id: number) : PokemonInterface | undefined {
        return Pokemons.find(pokemon => pokemon.id === id);
    }
}