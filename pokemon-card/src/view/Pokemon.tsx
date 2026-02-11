import { View, Text, StyleSheet, ScrollView } from "react-native";
import PokemonService from "../service/pokemon/PokemonService";
import { useEffect, useState } from "react";
import { PokemonInterface } from "../types/pokemon/PokemonInterface";
import PokemonCard from "./PokemonCard";

export default function Pokemon() {
    const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
    useEffect(() => {
        const pokemons = PokemonService.getAllPokemons();
        console.log(pokemons);
        setPokemons(pokemons);
    },[]);
    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    pokemons.length !== 0 && (
                        pokemons.map(pokemon => ( <PokemonCard pokemon={pokemon} key={pokemon.id}/> ))
                    )
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});