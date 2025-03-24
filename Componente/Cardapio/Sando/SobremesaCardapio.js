import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../../Card";
import Titulo from "../../Titulo";

function SobremesaCardapio({ sobremesas }) {
  return (
    <View style={styles.container}>
      <Titulo
        nome="Sobremesas"
        descricao="Doces tradicionais japonêses e ocidentais"
      />
      {sobremesas.map((item, index) => (
        <Card
          key={index.toString()}
          foto={item.foto}
          nome={item.nome}
          preco={item.preco}
          descricao={item.descricao}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
});

export default SobremesaCardapio;