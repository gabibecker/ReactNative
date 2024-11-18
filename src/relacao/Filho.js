import React from 'react';
import { Text } from 'react-native';
import estilo from '../components/estilo';

export default props => {
    return (
        <>
        <Text style= {estilo.fontG}>
            {props.nome} {props.sobrenome}
        </Text>
        </>
    );
};
