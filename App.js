// App.js

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import 'react-native-gesture-handler';
import SegundaTela from './src/telas/SegundaTela'; // Caminho atualizado para SegundaTela
import TelaInicial from './src/telas/TelaInicial'; // Caminho atualizado para TelaInicial

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="SegundaTela" component={SegundaTela} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
