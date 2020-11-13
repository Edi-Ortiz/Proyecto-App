import React, {useState}  from "react";
import {ImageBackground, FlatList, Image, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";

const launchscreenBg = require("../../assets/alfabeto1.png");

export default function App() {
  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState('');
  async function fetchGifs() {
    try {
      const API_KEY = "1d69V8MoqIASZ0JPiO5ZyHHfoxO2mti2";
      const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
      const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}`);
      const res = await resJson.json();
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  } /// add facebook fresco
  function onEdit(newTerm) {
    updateTerm(newTerm);
    fetchGifs();
  }
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={{ height: 0, width: 50, left: 10,top: 50}}>
            <FlatList
              data={gifs}
              renderItem={({item}) => (
               <Image
                 resizeMode='contain'
                 style={styles.image}
                 source={{uri: item.images.original.url}}
               />
             )}
           />
          </View>
          <View style={{ height: 0, width: 85, left: 10,top: 0}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Monday")}>
              <Text>YES</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 50, left: 70,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert No")}>
              <Text>NO</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 80, left: 135,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Hello")}>
              <Text>HELLO</Text>
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
  textInput: {
    width: '100%',
    height: 50,
    color: 'white'
  },
  image: {
    width: 300,
    height: 150,
    borderWidth: 3,
    marginBottom: 5
  },
});

