import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";


const launchscreenBg = require("../../Proyecto-App/app/assets/pantallaNavegacion.png");


const paginaDeNavegacion = () => {
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text >ALFABETO</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text>SALUDOS</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text>NUMEROS</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text>DIAS</Text>
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

export default paginaDeNavegacion;
