import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Card({ foto, nome, preco, descricao }) {
  return (
    <View style={styles.card}>
      <Image source={foto} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>{preco}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 3,
    borderColor: "#fff",
    backgroundColor: 'rgb(190, 123, 78)',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: "center",
    width: 250,      
    maxWidth: '90%',  
    alignSelf: 'center', 
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  preco: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white',
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
  },
  descricao: {
    fontSize: 14,
    textAlign: "center",
    color: 'white',
  },
});

export default Card;