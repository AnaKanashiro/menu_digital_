import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const textoOpcoes = ["MEU PERFIL", "FAZER PEDIDO"];

function OpcoesHeader({ navigation }) {
  return (
    <View style={styles.opcoes}>
      {textoOpcoes.map((texto) => (
        <TouchableOpacity 
          key={texto} 
          style={styles.opcao} 
          onPress={() => navigation.navigate(texto.toLowerCase())} // Navegação para a tela correspondente
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
    paddingVertical: 8,       // Adiciona padding vertical
    paddingHorizontal: 20,     // Adiciona padding horizontal
    marginRight: 20,          // Adiciona margem direita para separar os botões
    marginLeft: 20,          // Adiciona margem direita para separar os botões
    backgroundColor: 'rgb(115, 12, 12)', // Fundo vermelho
    borderRadius: 5,          // Adiciona bordas arredondadas
  },
  texto: {
    fontSize: 10, 
    color: 'white',           // Texto branco
  },
});

export default OpcoesHeader;