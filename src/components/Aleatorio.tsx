import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

export default ({min, max}) => {
    const delta = max - min + 1;
    const aleatorio = parseInt(Math.random() * delta) + props.min;
    return (
        <Text style={estilo.fontG}>
            O valor aleatório é {aleatorio}
        </Text>
    );
};
