import React from "react";
import { SafeAreaView } from "react-native";

export default props => {
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <SafeAreaView style={{
            height: 20,
            width: 20,
            backgroundColor: props.color || '#000',
        }} />
    );
};
