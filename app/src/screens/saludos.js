import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";

const launchscreenBg = require("../../assets/alfabeto1.png");


const Saludos = () => {
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={{ height: 0, width: 50, left: 10,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>SI</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 50, left: 70,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>NO</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 80, left: 135,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>HOLA</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 100, left: 210,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>POR QUÉ</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 100, left: 300,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>ME LLAMO</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 130, left: 10,top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>COMO ESTAS</Text>
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

export default Saludos;