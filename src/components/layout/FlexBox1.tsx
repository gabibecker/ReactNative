import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import estilo from "../estilo";
import Quadrado from "./Quadrado";

export default props => {
    return (
        <SafeAreaView style={style.FlexV1}>
            <Quadrado color="#ff801a" />
            <Quadrado color="#50d1f6" />
            <Quadrado color="#dd22c1" />
            <Quadrado color="#8312ed" />
            <Quadrado color="#36c9a7" />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    FlexV1: {
        backgroundColor: "#000",
        flexGrow: 1,
        justifyContent: "flex-start",
    },
});
