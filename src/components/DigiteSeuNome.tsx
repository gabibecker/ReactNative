import React, {useState} from 'react';
import { Text,TextInput, SafeAreaView } from 'react-native';
import estilo from './estilo';

export default props => {
    const [nome, setNome] = useState('Teste');
    return(
        <SafeAreaView>
            <Text> {nome} </Text>
                <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
                />
        </SafeAreaView>
    );
};
