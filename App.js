import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/telas/TelaInicial';
import SegundaTela from './src/telas2/SegundaTela';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="SegundaTela" component={SegundaTela} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
