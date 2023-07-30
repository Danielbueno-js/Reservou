import React from 'react';
import { View, StatusBar, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFD700" />
      <Image
        source={require('../assets/splashLogo.png')} 
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700', 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  logo: {
    width: 90, // Defina o tamanho da sua logo
    height: 90, // Defina o tamanho da sua logo
  },
});

export default SplashScreen;
