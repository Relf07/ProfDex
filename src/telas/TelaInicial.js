import React from 'react';
import { Button, ImageBackground, StyleSheet, View } from 'react-native';

const TelaInicial = ({ navigation }) => {
  const irParaOutraTela = () => {
    navigation.navigate('SegundaTela');
  };

  return (
    <ImageBackground
      source={require('../../background/Poke.png')}
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
    height: 'windowHeight',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width:'200',
    height:'80',
  }
});

export default TelaInicial;