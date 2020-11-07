import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import PaginaPrincipal from "./src/screens/paginaPrincipal";
import PaginaDeNavegacion from "./src/screens/paginaDeNavegacion"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="principal">
      <Stack.Screen name="principal" component={PaginaPrincipal} />
        <Stack.Screen name="Navegacion" component={PaginaDeNavegacion} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}