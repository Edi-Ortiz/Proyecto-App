import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";

const launchscreenBg = require("../../assets/alfabeto1.png");


const Dias = () => {
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
        <View style={{ height: 0, width: 80, left: 10,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>LUNES</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 85, left: 100,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>MARTES</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 110, left: 200,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>MIERCOLES</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 110, left: 320,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>JUEVES</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 110, left: 10,top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>VIERNES</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 110, left: 100,top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>SABADO</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 110, left: 200,top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>DOMINGO</Text>
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

export default Dias;