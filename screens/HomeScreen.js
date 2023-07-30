import React from 'react';
import { View, StatusBar, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import CarouselComponent from '../components/CarouselComponent';



const SeparatorLine = () => <View style={styles.separatorLine} />;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFD700" />
      <Header />
      <View style={styles.locationContainer}>
        <Text style={styles.titleLocation}>Localização</Text>
        <Image source={require('../assets/location-image.png')} style={styles.locationImage} />
        <View style={styles.gpsButtonContainer}>
          <TouchableOpacity style={styles.activateGPSButton}>
            <Text style={styles.activateGPSButtonText}>Ativar o GPS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SeparatorLine />
      <View style={styles.servicesContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleServices}>
          Serviços e Reservas Próximos
        </Text>
        <View style={styles.servicesRow}>
          <View style={[styles.ButtonLeft, styles.shadow]}>
            <TouchableOpacity>
              <Image source={require('../assets/prato-pronto.png')} />
              <Text style={styles.pratoProntoButtonText}>Prato Pronto</Text>
              <Text style={styles.verMaisButtonText1}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.ButtonRight, styles.shadow]}>
            <TouchableOpacity>
              <Image source={require('../assets/salao-glamour.png')} />
              <Text numberOfLines={1} style={styles.salaoGlamourButtonText}>Salão espaço Glamour</Text>
              <Text style={styles.verMaisButtonText2}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <SeparatorLine />
      <View style={styles.exploreContainer}>
        <Text style={styles.title}>Explore</Text>
        <View style={styles.exploreRow}>
          <CarouselComponent />
        </View>
      </View>
      <View style={styles.bottomBar} />
    </View>
  );
};

const buttonSpacing = 20;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222D5B',
    marginLeft: 20,
    marginTop: -45,
  },
  pratoProntoButtonText: {
    fontSize: 13,
    color: '#222D5B',
  },
  verMaisButtonText1: {
    fontSize: 13,
    color: '#fff',
  },
  salaoGlamourButtonText: {
    fontSize: 13,
    color: '#222D5B',
  },
  verMaisButtonText2: {
    fontSize: 13,
    color: '#FFD700',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  separatorLine: {
    height: 2,
    backgroundColor: 'lightgray',
    marginVertical: 20,
  },
  gpsButtonContainer: {
    marginTop: 20,
  },
  titleLocation: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222D5B',
    marginRight: 270,
  },
  titleServices: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222D5B',
    marginLeft: 0,
    marginTop: -45,
  },
  locationContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  locationImage: {
    width: '100%',
    height: 150,
    marginTop: 10,
  },
  activateGPSButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  activateGPSButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  servicesContainer: {
    marginTop: 40,
    width: 350,
    height: 150,
    paddingLeft: 20,
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  ButtonLeft: {
    backgroundColor: '#E1B12C',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 10,
    width: 160,
    height: 136.74,
    overflow: 'hidden',
    marginRight: buttonSpacing,
    alignItems: 'center',
  },
   ButtonRight: {   
    backgroundColor: '#FFf',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 10,
    width: 166,
    height: 136.74,
    overflow: 'hidden',
    marginRight: buttonSpacing,
    alignItems: 'center',
  },
  exploreContainer: {
    marginTop: 40,
  },
  exploreRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  exploreButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 108,
    height: 69.8,
    marginRight: buttonSpacing,
  },
  exploreButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  bottomBar: {
    height: 40,
    backgroundColor: '#FFD700',
    marginTop: 20,
    borderRadius: 20,
  },
});

export default HomeScreen;
