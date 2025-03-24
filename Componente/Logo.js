import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png';

function Logo() {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <Pressable onPress={goToHome}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoImage} />
        <Text style={styles.logoText}>
          <Text style={styles.boldText}>Umai</Text>Lanches
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 30,
    margin: 20,
  },
  logoImage: {
    marginRight: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  logoText: {
    fontSize: 35,
    color: 'rgb(115, 12, 12)',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Logo;