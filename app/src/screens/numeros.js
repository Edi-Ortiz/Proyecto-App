import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";

const launchscreenBg = require("../../assets/alfabeto1.png");


const Numeros = () => {
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
        <View style={{ height: 0, width: 50, left: 10,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>0</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 50, left: 60,top: 50 }}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>1</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 110,top: 50 }}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>2</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 160,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>3</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 210,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>4</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 260,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>5</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 310,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>6</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 360,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>7</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 10,top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>8</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 60,top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>9</Text>
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

export default Numeros;