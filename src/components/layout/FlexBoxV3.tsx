import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import estilo from '../estilo';
import Quadrado from './Quadrado';

export default props => {
    return (
        <SafeAreaView style={style.FlexV2}>
            <Quadrado color="#ff801a" lado={20} />
            <Quadrado color="#50d1f6" lado={30}/>
            <Quadrado color="#dd22c1" lado={40}/>
            <Quadrado color="#8312ed" lado={50}/>
            <Quadrado color="#36c9a7" lado={60}/>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    FlexV2: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "baseline",
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    },
});
