import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from './Logo';
import OpcoesHeader from './OpcoesHeader';

function Header() {
    return (
        <View style={styles.header}>
            <Logo />
            <View style={styles.opcoes}>
                <OpcoesHeader />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        width: '100%', 
        height: 160,
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'collum', 
        display: 'flex',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10, 
    },
    opcoes: {
        display: 'flex',
        flexDirection: 'row',
    }
});

export default Header;


