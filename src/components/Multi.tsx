import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';


 function Comp() {
    return <Text style={estilo.fontM}> Comp #00</Text>;
}

function Comp1() {
    return <Text style={estilo.fontP}> Comp #01</Text>;
}


 function Comp2() {
    return <Text style={estilo.fontP}> Comp #02</Text>;
}

export {Comp1, Comp2};
export default Comp;
