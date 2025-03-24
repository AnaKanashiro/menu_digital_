import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Importe as imagens usando require
const perfil = require("../assets/perfil.png");
const sacola = require("../assets/sacola.png");

function IconesHeader() {
  const icones = [perfil, sacola];

  return (
    <View style={styles.iconesContainer}>
      {icones.map((icone, index) => (
        <View key={index} style={styles.icone}>
          <Image source={icone} style={styles.iconeImagem} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  iconesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
  icone: {
    margin: 10,
    width: 25,
    height: 25,
  },
  iconeImagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Adicionado para garantir que a imagem caiba no container
  },
});

export default IconesHeader;