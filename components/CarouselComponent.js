import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

const data = [
  { id: 1, image: require('../assets/pizza.png'), label: 'Pizzaria' },
  { id: 2, image: require('../assets/restaurante.png'), label: 'Restaurantes' },
  { id: 3, image: require('../assets/esporte.png'), label: 'Esportes' },
  // Adicione mais itens de acordo com suas necessidades
];

const CarouselComponent = () => {
  const renderItems = () => {
    return data.map((item) => (
      <View key={item.id} style={styles.carouselItemContainer}>
        <TouchableOpacity style={styles.exploreButton}>
          <Image source={item.image} />
        </TouchableOpacity>
        <Text style={styles.carouselItemTitle}>{item.label}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.exploreRow}>
      {renderItems()}
    </View>
  );
};

const styles = {
  exploreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  carouselItemContainer: {
    alignItems: 'center',
    marginTop: -20,
  },
  exploreButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 108,
    height: 80,
    marginHorizontal: 5,
  },
  carouselItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222D5B',
    marginTop: 10,
  },
};

export default CarouselComponent;
