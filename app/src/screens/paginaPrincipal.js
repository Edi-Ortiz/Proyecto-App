import React, {useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";
import * as Font from 'expo-font';
//import getEnvVars from "../../enviorement/enviorement";

const launchscreenBg = require("../../assets/11.png");
const launchscreenLogo = require("../../assets/logo.png");

const PaginaPrincipal = ({navigation}) => {
  const [gifs, setGifs] = useState("");

  useEffect(() => {
    (async () => await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }))();
     }, [])

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
            <Button large dark onPress={touch} name="gifs" style={{ backgroundColor: "#000000", alignSelf: "center" }}>
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
    width: 400,
    height: 200
  }
});

export default PaginaPrincipal;