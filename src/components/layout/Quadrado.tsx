import React from "react";
import { SafeAreaView } from "react-native";

export default props => {
    const lado = props.lado || 50;
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <SafeAreaView style={{
            height: lado,
            width: lado,
            backgroundColor: props.color || '#000',
        }} />
    );
};
