import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DigiteSeuNome from './components/DigiteSeuNome';

// import ContadorV2 from './contador/ContadorV2';
// import Botão from './components/Botão';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import Primeiro from './components/Primeiro';
// import X, { Comp1, Comp2 } from './components/Multi';
// import Titulo from './components/Titulo';
// import Contador from './components/Contador';
// import Pai from './direta/Pai';
// import Pai from './indireta/Pai';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar';
// import Pai from './relacao/Pai';
// import Filho from './relacao/Filho';
//import UsuarioLogado from './components/UsuarioLogado';
//import ListaProdutos from './components/produtos/ListaProdutos';
//import ListaProdutoV2 from './components/produtos/ListaProdutoV2';

export default () => (
    <SafeAreaView style={style.App}>
        <DigiteSeuNome/>
        {/* <ListaProdutoV2/> */}
        {/* <ListaProdutos /> */}
        {/* <UsuarioLogado usuario={{nome: 'Gui', email: 'asdsa@gmail.com'}}/>
        <UsuarioLogado usuario={{nome: 'Ao', email: ''}}/> */}
        {/* <Pai>
            <Filho nome = "AKRTU" sobrenome= "adsada"/>
            <Filho nome = "AKASD" sobrenome= "adssds"/>
            <Filho nome = "AKER" sobrenome= "addrtwe"/>
        </Pai> */}
        {/* <ParImpar num = {3}/> */}
        {/* <Diferenciar/> */}
        {/* <ContadorV2 /> */}
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
        {/* <Pai/> */}
        {/* <Pai/> */}
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
