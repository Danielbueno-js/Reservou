import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/botaoVetor.png')} />
      </TouchableOpacity>
      <Image source={require('../assets/logo.png')} style={[styles.logo, { width: 50, height: 50 }]}/>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/botaoFiltro.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFD700',
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 16,
  },
  logo: {
    width: 100,
    height: 50,
  },
});

export default Header;
