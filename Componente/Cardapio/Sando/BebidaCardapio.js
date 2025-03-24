import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../../Card";
import Titulo from "../../Titulo";

function BebidaCardapio({ bebidas }) {
  return (
    <View style={styles.container}>
      <Titulo
        nome="Bebidas"
        descricao="Não servimos alcool"
      />
      {bebidas.map((item, index) => (
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

export default BebidaCardapio;