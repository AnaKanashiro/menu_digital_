import React from 'react';
import { StatusBar, StyleSheet, View, ScrollView } from "react-native";
import { sanduiches } from "../Componente/dadosCardapio/dadosSando";
import SandoCardapio from "../Componente/Cardapio/Sando/SandoCardapio";
import SideCardapio from "../Componente/Cardapio/Sando/SideCardapio";
import { acompanhamentos } from "../Componente/dadosCardapio/dadosSides";
import BebidaCardapio from "../Componente/Cardapio/Sando/BebidaCardapio";
import { bebidas } from "../Componente/dadosCardapio/dadosBebida";
import SobremesaCardapio from "../Componente/Cardapio/Sando/SobremesaCardapio";
import {sobremesas} from "../Componente/dadosCardapio/dadosSobremesa";
function Home() {
    return (
        <View style={styles.container}>
          <Header />
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <SandoCardapio sanduiches={sanduiches} />
            <SideCardapio acompanhamentos={acompanhamentos} />
            <BebidaCardapio bebidas={bebidas} />
            <SobremesaCardapio sobremesas={sobremesas} />
          </ScrollView>
          <StatusBar style="auto" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(230, 190, 160)",
      alignItems: "center",
      width: "100%",
    },
    scrollViewContent: {
      alignItems: "center",
      paddingBottom: 20,
      width: "100%",
    },
export default Home;