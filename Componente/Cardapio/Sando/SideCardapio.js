import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../../Card";
import Titulo from "../../Titulo";

function SideCardapio({ acompanhamentos }) {
  return (
    <View style={styles.container}>
      <Titulo
        nome="Acompanhamentos"
        descricao="acompanhamentos variados"
      />
      {acompanhamentos.map((item, index) => (
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

export default SideCardapio;