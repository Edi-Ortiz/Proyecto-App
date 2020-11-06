import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";


const launchscreenBg = require("../../Proyecto-App/app/assets/11.png");
const launchscreenLogo = require("../../Proyecto-App/app/assets/logo.png");

const paginaPrincipal = () => {
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={{ marginBottom: 200 }}>
            <Button
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text>COMENZAR</Text>
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
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: 80,
    marginBottom: 30
  },
  logo: {
    width: 200,
    height: 350
  }
});

export default paginaPrincipal;
