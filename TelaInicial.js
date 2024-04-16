import React from 'react';
import { Button, ImageBackground, StyleSheet, View } from 'react-native';

const TelaInicial = ({ navigation }) => {
  const irParaOutraTela = () => {
    navigation.navigate('SegundaTela');
  };

  return (
    <ImageBackground
      source={require('./src/background/Poke.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Button title="Start" onPress={irParaOutraTela} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TelaInicial;
