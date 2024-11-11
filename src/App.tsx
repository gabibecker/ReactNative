import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Primeiro from './components/Primeiro';

import X, { Comp1, Comp2 } from './components/Multi';
export default () => (
    <SafeAreaView style={style.App}>
        <Primeiro />
        <X />
        <Comp1 />
        <Comp2 />
    </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
