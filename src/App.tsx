import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Botão from './components/Botão';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import Primeiro from './components/Primeiro';
// import X, { Comp1, Comp2 } from './components/Multi';
// import Titulo from './components/Titulo';

export default () => (
    <SafeAreaView style={style.App}>
        <Botão />
        {/* <Titulo principal="cadastro" secundario="Tela de cadastro"/> */}
        {/* <Aleatorio min ={10} max={60}/>
        <Aleatorio min ={10} max={60}/>
        <Aleatorio min ={10} max={60}/>
        <Aleatorio min ={10} max={60}/>
        <Aleatorio min ={10} max={60}/>
        <Aleatorio min ={10} max={60}/> */}
        {/* <MinMax min={3} max={20}/>
         <Primeiro />
        <X />
        <Comp1 />
        <Comp2 /> */}
    </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});
