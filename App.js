import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simule um carregamento ou processamento inicial com um setTimeout
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Defina isLoading como false após o tempo de carregamento desejado
    }, 2000); // Defina o tempo de exibição da SplashScreen em milissegundos (neste exemplo, 2000ms = 2 segundos)
  }, []);

  // Se isLoading for true, exiba a SplashScreen, caso contrário, exiba o fluxo de navegação normal
  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
