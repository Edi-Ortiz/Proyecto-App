import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";
import PaginaPrincipal from "../screens/paginaPrincipal"

const launchscreenBg = require("../../assets/pantallaNavegacion.png");


const PaginaDeNavegacion = ({navigation}) => {
  

  const touch = () => {
    navigation.navigate("Alfabeto", {})
  }

  const salu = () => {
    navigation.navigate("Saludos", {})
  }

  const numeros = () => {
    navigation.navigate("Numeros", {})
  }

  const dias = () => {
    navigation.navigate("Days of the week", {})
  }
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark onPress={touch} name = "alfabeto"
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text >ALFABETO</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark onPress={salu} name = "saludos"
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text>SALUDOS Y FRASES</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark onPress={numeros} name = "numeros"
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text>NUMEROS</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark onPress={dias} name = "Days of the week"
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text>DAYS OF THE WEEK</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }


const styles = StyleSheet.create ({
  
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
  
  },
});

export default PaginaDeNavegacion;
