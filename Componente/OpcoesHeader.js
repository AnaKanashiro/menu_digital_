import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const textoOpcoes = ["MEU PERFIL", "FAZER PEDIDO"];

function OpcoesHeader() {
  const navigation = useNavigation();

  const handleNavigation = (texto) => {
    if (texto === "MEU PERFIL") {
      navigation.navigate("CadastroUsuario");
    } else if (texto === "FAZER PEDIDO") {
      navigation.navigate("ResumoCompras");
    }
  };

  return (
    <View style={styles.opcoes}>
      {textoOpcoes.map((texto) => (
        <TouchableOpacity
          key={texto}
          style={styles.opcao}
          onPress={() => handleNavigation(texto)}
        >
          <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  opcoes: {
    flexDirection: 'row',
    display: 'flex',
  },
  opcao: {
    fontSize: 16,
    height: '100%',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: 'rgb(115, 12, 12)',
    borderRadius: 5,
  },
  texto: {
    fontSize: 10,
    color: 'white',
  },
});

export default OpcoesHeader;