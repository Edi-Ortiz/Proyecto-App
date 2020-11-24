import React, {useState}  from "react";
import { ImageBackground, FlatList, Image, View, StyleSheet } from "react-native";
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
      <View style={{ height: 0, width: 85, left: 10,top: 0}}>
          <Button rounded dark
            style={{ backgroundColor: "#4a90e2" }}
            onPress={(text) => onEdit("@signwithrobert Monday")}>
            <Text>MONDAY</Text>
          </Button>
        </View>
        <View style={{ height: 0, width: 85, left: 110,top: 0}}>
          <Button rounded dark
            style={{ backgroundColor: "#4a90e2" }}
            onPress={(text) => onEdit("@signwithrobert Tuesday")}>
            <Text>TUESDAY</Text>
          </Button>
        </View>
        <View style={{ height: 0, width: 110, left: 200,top: 0}}>
          <Button rounded dark
            style={{ backgroundColor: "#4a90e2" }}
            onPress={(text) => onEdit("@signwithrobert Wednesday")}>
            <Text>WEDNESDAY</Text>
          </Button>
        </View>
        <View style={{ height: 0, width: 110, left: 10,top: 60}}>
          <Button rounded dark
            style={{ backgroundColor: "#4a90e2" }}
            onPress={(text) => onEdit("@signwithrobert Thursday")}>
            <Text>THURSDAY</Text>
          </Button>
        </View>
        <View style={{ height: 0, width: 110, left: 110,top: 60}}>
          <Button rounded dark
            style={{ backgroundColor: "#4a90e2" }}
            onPress={(text) => onEdit("@signwithrobert Friday")}>
            <Text>FRIDAY</Text>
          </Button>
        </View>
        <View style={{ height: 0, width: 110, left: 200,top: 60}}>
          <Button rounded dark
            style={{ backgroundColor: "#4a90e2" }}
            onPress={(text) => onEdit("@signwithrobert Saturday")}>
            <Text>SATURDAY</Text>
          </Button>
        </View>
        <View style={{ height: 0, width: 110, left: 10,top: 120}}>
          <Button rounded dark
            style={{ backgroundColor: "#4a90e2" }}
            onPress={(text) => onEdit("@signwithrobert Sunday")}>
            <Text>SUNDAY</Text>
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
