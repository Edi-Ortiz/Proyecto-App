import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//funcion principal que ejecuta todos los componentes
//funcionalidades, pantallas y otras de nuestra aplicacion

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>hola mundo</Text>
        <StatusBar style="auto" />
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
