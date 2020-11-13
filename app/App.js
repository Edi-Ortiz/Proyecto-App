import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import PaginaPrincipal from "./src/screens/paginaPrincipal";
import PaginaDeNavegacion from "./src/screens/paginaDeNavegacion";
import Alfabeto from "./src/screens/alfabeto";
import Saludos from "./src/screens/saludos";
import Numeros from "./src/screens/numeros";
import Dias from "./src/screens/dias";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="principal">
        <Stack.Screen name="principal" component={PaginaPrincipal} />
        <Stack.Screen name="Navegacion" component={PaginaDeNavegacion} />
        <Stack.Screen name="Alfabeto" component={Alfabeto} />
        <Stack.Screen name="Saludos" component={Saludos} />
        <Stack.Screen name="Numeros" component={Numeros} />
        <Stack.Screen name="Dias" component={Dias} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}