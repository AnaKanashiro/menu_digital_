import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { bebidas } from '../Componente/dadosCardapio/dadosBebida';
import { sanduiches } from '../Componente/dadosCardapio/dadosSando';
import { acompanhamentos } from '../Componente/dadosCardapio/dadosSides';
import { sobremesas } from '../Componente/dadosCardapio/dadosSobremesa';

const cardapio = [...bebidas, ...sanduiches, ...acompanhamentos, ...sobremesas];

function ResumoCompras() {
  const [itensSelecionados, setItensSelecionados] = useState([]);
  const [total, setTotal] = useState('R$ 0,00');

  useEffect(() => {
    const novoTotal = calcularTotal();
    setTotal(novoTotal);
  }, [itensSelecionados]);

  const adicionarItem = (item) => {
    setItensSelecionados([...itensSelecionados, item]);
  };

  const removerItem = (item) => {
    const novosItens = itensSelecionados.filter((i) => i.nome !== item.nome);
    setItensSelecionados(novosItens);
  };

  const calcularTotal = () => {
    let soma = 0;
    itensSelecionados.forEach(item => soma = soma + item.precoBRL);
    return soma.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };


  const renderItem = ({ item }) => {
    const isSelecionado = itensSelecionados.some((i) => i.nome === item.nome);

    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          isSelecionado && styles.itemSelecionado,
        ]}
        onPress={() => {
          if (isSelecionado) {
            removerItem(item);
          } else {
            adicionarItem(item);
          }
        }}
      >
        <Text style={styles.itemNome}>{item.nome}</Text>
        <Text style={styles.itemPrecoBRL}>{item.precoBRL.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione seus Pedidos</Text>
      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.nome}
        renderItem={renderItem}
        style={styles.lista}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgb(230, 190, 160)",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'rgb(115, 12, 12)',
    fontWeight: 'bold',
  },
  lista: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemSelecionado: {
    backgroundColor: 'rgb(190, 123, 78)',
  },
  itemNome: {
    fontSize: 18,
    color: 'rgb(115, 12, 12)',
    fontWeight: 'bold',
  },
  itemPrecoBRL: {
    fontSize: 16,
    color: 'rgb(115, 12, 12)',
  },
  totalContainer: {
    padding: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ResumoCompras;