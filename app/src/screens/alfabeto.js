import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";

const launchscreenBg = require("../../Proyecto-App/app/assets/alfabeto1.png");


const Alfabeto = () => {
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={{ height: 0, width: 50, left: 10,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}>
              <Text>A</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 50, left: 60,top: 50 }}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>B</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 110,top: 50 }}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>C</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 160,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>D</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 210,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>E</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 260,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>F</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 310,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>G</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 360,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>H</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 10,top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>I</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 60,top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>J</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 110, top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>K</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 160, top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>L</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 210,top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>M</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 260, top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>N</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 310, top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>Ñ</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 310, top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>Ñ</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 360, top: 110}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>O</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 10, top: 170}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>P</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 60, top: 170}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>Q</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 110, top: 170}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>R</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 160, top: 170}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>S</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 210, top: 170}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>T</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 260, top: 170}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>U</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 310, top: 170}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>V</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 360, top: 170}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>W</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 10, top: 230}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>X</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 60, top: 230}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>Y</Text>
            </Button>
          </View>
          <View style={{  height: 0, width: 50, left: 110, top: 230}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2"}}>
              <Text>Z</Text>
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

export default Alfabeto;