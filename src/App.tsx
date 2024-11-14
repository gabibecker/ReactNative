import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// import Botão from './components/Botão';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import Primeiro from './components/Primeiro';
// import X, { Comp1, Comp2 } from './components/Multi';
// import Titulo from './components/Titulo';
// import Contador from './components/Contador';
import Pai from './direta/Pai';

export default () => (
    <SafeAreaView style={style.App}>
        {/* <Contador inicial={100} passo={2} />
        <Contador/> */}
        {/* <Botão /> */}
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
        <Pai></Pai>
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
