import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import estilo from "../estilo";

export default ({num}) => {
    return (
        <SafeAreaView style ={style.Container}>
            <Text style={[estilo.fontG, style.Num]}>
                {num}
            </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25,
    },
    Num: {
        color: '#FFF'
    }
})