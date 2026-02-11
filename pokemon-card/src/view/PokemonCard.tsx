import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Button, Pressable, Modal, } from 'react-native';
import { PokemonInterface } from '../types/pokemon/PokemonInterface';

interface Props {
  pokemon: PokemonInterface;
}

const { width } = Dimensions.get('window');

const typeColors: Record<string, string> = {
  Fire: '#F08030',
  Water: '#6890F0',
  Grass: '#78C850',
  Electric: '#F8D030',
  Psychic: '#F85888',
  Ghost: '#705898',
  Dragon: '#7038F8',
  Dark: '#705848',
  Fighting: '#C03028',
  Steel: '#B8B8D0',
  Flying: '#A890F0',
  Poison: '#A040A0',
  Normal: '#A8A878',
};

export const darkenColor = (hex: string, amount: number) => {
    let col = hex.replace('#', '');
  
    const num = parseInt(col, 16);
  
    let r = (num >> 16) - amount;
    let g = ((num >> 8) & 0x00ff) - amount;
    let b = (num & 0x0000ff) - amount;
  
    r = r < 0 ? 0 : r;
    g = g < 0 ? 0 : g;
    b = b < 0 ? 0 : b;
  
    return `rgb(${r}, ${g}, ${b})`;
  };

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
    const backgroundColor = typeColors[pokemon.type[0]] || '#777';
    const [modalVisible, setModalVisible] = React.useState(false);

    const jsx = (
        <View style={[styles.card, { backgroundColor }]}>
            <View style={[styles.detailRow]}>
            <Image source={{ uri: pokemon.image }} style={styles.image} resizeMode="contain" />
            {/* Name */}
            <View style={[styles.basicDetailsContainer]}>
                <View style={styles.typeContainer}>
                    {pokemon.type.map((t) => (
                        <View key={t} style={styles.typeBadge}>
                            <Text style={styles.typeText}>{t}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.name}>{pokemon.name}</Text>
                {
                    modalVisible === false && (
                        <Pressable 
                            style={[styles.viewDetails, { backgroundColor: darkenColor(backgroundColor, 30)  }]}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={[styles.typeText]}>View Details</Text>
                        </Pressable>
                    )
                }
                
            </View>
            </View>

            <Text style={styles.description}>
                {pokemon.description}
            </Text>
        {/* Stats */}
            <View style={styles.statsRow}>
                <Text style={styles.stat}>HP: {pokemon.hp}</Text>
                <Text style={styles.stat}>ATK: {pokemon.attack}</Text>
                <Text style={styles.stat}>DEF: {pokemon.defense}</Text>
            </View>

        {/* Ability */}
            <View style={styles.abilityBox}>
                <Text style={styles.abilityTitle}>Special Ability</Text>
                <Text style={styles.abilityText}>
                    {pokemon.specialAbility}
                </Text>
            </View>
        </View>
    );

    return (
        <View>
            {jsx}
            <Modal 
                visible={modalVisible} 
                onRequestClose={() => setModalVisible(false)} 
                animationType='slide'
                >
                <View style={styles.modalOverlay}>
                {jsx}
                </View>
                <View style={{ padding: 20 }}>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    
    )
};

export default PokemonCard;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer : {
        width: '90%'
    },
    viewDetails: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        marginHorizontal: 5,
        marginTop: 10,
    },
    basicDetailsContainer: {
        marginTop: 10,
        flex: 1,
        alignItems: 'flex-end'
    },
    card: {
        width: width * 0.9,
        borderRadius: 20,
        padding: 20,
        alignSelf: 'center',
        marginVertical: 20,
        elevation: 8,
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 10,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 8,
    },
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    typeBadge: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        marginHorizontal: 5,
    },
    typeText: {
        color: '#fff',
        fontWeight: '600',
    },
    description: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 5,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
    },
    stat: {
        color: '#fff',
        fontWeight: 'bold',
    },
    abilityBox: {
        marginTop: 10,
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 10,
        borderRadius: 12,
    },
    abilityTitle: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    abilityText: {
        color: '#fff',
    },
    detailRow: {
        flexDirection: 'row',
    }
});