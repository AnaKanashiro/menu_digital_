import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from './Logo';
import OpcoesHeader from './OpcoesHeader';
import IconesHeader from './IconesHeader';

function Header() {
    return (
        <View style={styles.header}>
            <Logo />
            <View style={styles.opcoes}>
                <OpcoesHeader />
                {/* <IconesHeader /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        width: '100%', // Faz o cabeçalho ocupar toda a largura da tela
        height: 160,
        justifyContent: 'center',
        alignItems: 'center', // Centraliza o conteúdo verticalmente
        flexDirection: 'collum', // Para alinhar a logo e o título lado a lado
        display: 'flex',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10, // Adiciona um espaço entre a logo e o título
    },
    opcoes: {
        display: 'flex',
        flexDirection: 'row',
    }
});

export default Header;


