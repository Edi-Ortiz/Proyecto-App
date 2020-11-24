import React, {useState}  from "react";
import {ImageBackground, FlatList, Image, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";
const launchscreenBg = require("../../assets/alfabeto1.png");


export default function App(){
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
          <View style={{ height: 0, width: 150, left: 10,top: -100}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Time passage")}>
              <Text>Time passage</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 140,top: -100}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Dusk")}>
              <Text>dusk</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 220,top: -100}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Day")}>
              <Text>day</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 285,top: -100}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Tomorrow")}>
              <Text>Tomorrow</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 10,top: -50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Today")}>
              <Text>Today</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 90,top: -50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert All Night")}>
              <Text>All Night</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 188,top: -50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Early")}>
              <Text>Early</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 260,top: -50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Soon")}>
              <Text>Soon</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 330,top: -50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Hour")}>
              <Text>Hour</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 10,top: 0}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Late")}>
              <Text>Late</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 80,top: 0}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Second")}>
              <Text>Second</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 170,top: 0}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Every week")}>
              <Text>Every week</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 300,top: 0}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Daily")}>
              <Text>Daily</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 10,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Annually")}>
              <Text>Annually</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 110,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Monthly")}>
              <Text>Monthly</Text>
            </Button>
          </View>
          <View style={{ height: 0, width: 150, left: 210,top: 50}}>
            <Button rounded dark
              style={{ backgroundColor: "#4a90e2" }}
              onPress={(text) => onEdit("@signwithrobert Every Friday")}>
              <Text>Every Friday</Text>
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
