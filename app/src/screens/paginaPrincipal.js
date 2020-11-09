import React, { useState } from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";
//import getEnvVars from "../../enviorement/enviorement";

const launchscreenBg = require("../../assets/11.png");
const launchscreenLogo = require("../../assets/logo.png");

const PaginaPrincipal = ({navigation}) => {
  const [gifs, setGifs] = useState("");
  const [error, setError] = useState(false);

const touch = () => {
    navigation.navigate("Navegacion", { gifs })
  }
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={{ marginBottom: 200 }}>
            <Button onPress={touch} name="gifs" style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text>BEGIN</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    )
  }

const styles = StyleSheet.create ({
  imageContainer: {
    flex: 1,
    alignItems:"center",
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

export default PaginaPrincipal;