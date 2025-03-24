// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import Home from "./rotas/Home";
import CadastroUsuario from "./rotas/CadastroUsuario";
import ResumoCompras from "./rotas/ResumoCompra";
import Header from "./Componente/Header"; 
import LoginUsuarios from "./rotas/LoginUsuarios";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header /> {/* Renderize o Header aqui */}
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false, // Esconde o header padrão do Stack Navigator
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
          <Stack.Screen name="LoginUsuario" component={LoginUsuarios} />
          <Stack.Screen name="ResumoCompras" component={ResumoCompras} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;