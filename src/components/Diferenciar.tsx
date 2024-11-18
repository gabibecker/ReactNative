import React from "react";
import { Text, Platform } from "react-native";
import estilo from "./estilo";

export default props => {
    if(Platform.OS == 'android'){
    return <Text style={estilo.fontG}> Android </Text>
    } else if (Platform.OS == 'ios') {
        return <Text style={estilo.fontG}> IOS </Text>
    } else {
        return <Text style={estilo.fontG}> nada </Text>

    }
};
