import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import PaginaPrincipal from "./src/screens/paginaPrincipal";
import PaginaDeNavegacion from "./src/screens/paginaDeNavegacion";
import Alfabeto from "./src/screens/Time";
import Saludos from "./src/screens/PeopleandFamily";
import Numeros from "./src/screens/MonthsandSeason";
import Dias from "./src/screens/Daysoftheweek";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DEAF dictionary">
        <Stack.Screen name="DEAF dictionary" component={PaginaPrincipal} />
        <Stack.Screen name="Navegacion" component={PaginaDeNavegacion} />
        <Stack.Screen name="Time" component={Alfabeto} />
        <Stack.Screen name="People and Family" component={Saludos} />
        <Stack.Screen name="Months and Season" component={Numeros} />
        <Stack.Screen name="Days of the week" component={Dias} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}