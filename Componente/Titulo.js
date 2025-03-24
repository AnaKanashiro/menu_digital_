import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Titulo({ nome, descricao }) {
  return (
    <View style={styles.Titulo}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Titulo: { 
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  nome: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  descricao: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
});

export default Titulo;