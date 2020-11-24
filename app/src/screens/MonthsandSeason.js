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
  } 
  function onEdit(newTerm) {
    updateTerm(newTerm);
    fetchGifs();
  }
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
        <View style={{height:150, width:350, left:30, top: -150}}>
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
        <View style={{ height: 0, width: 150, left: 10,top: 0}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Spring")}>
              <Text>Spring</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 100,top: 0}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert March")}>
              <Text>March</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 190,top: 0}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
                onPress={(text) => onEdit("@signwithrobert January")}>
              <Text>January</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 290,top: 0}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert November")}>
              <Text>November</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 10,top: 60}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert July")}>
              <Text>July</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 80,top: 60}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert December")}>
              <Text>December</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 190,top: 60}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Summer")}>
              <Text>Summer</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 290,top: 60}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert April")}>
              <Text>April</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 10,top: 120}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert February")}>
              <Text>February</Text>
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

