//importar los modulos
import React from "react";
import {Stylesheet, Text, View, } from "react-native";
import { Button } from "nachos-ui";

//variable que contienes la pantalla principal
const listaDeGiF = () => {
    return (
        <View style={{styles:container}}> 
            <text>Esta es la pantalla principal</text>
        </View>
    );
};
const btnPrincipal = () => {
    const btnStyle = { margin: 10 }
    return (
        <Button type='success' style={btnStyle}>Success</Button>
    );
};

const styles = Stylesheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default listaDeGiF;