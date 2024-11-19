/* eslint-disable react-native/no-inline-styles */
import React, {Component} from "react";
import { Button, Text, TextInput, View } from "react-native";
import estilo from "../estilo";
import Numero from "./Numero";

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: [],
    };

    alterarQtdNumero = (qtde) => {
        this.setState({ qtdNumeros: +qtde });
    };

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60 ) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
    };

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros) 
            .fill(null) 
            .reduce((n, _) => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a,b) => a-b );
            this.setState({ numeros });
    };


    //alternativa de gerar números
    gerarNumeros2 = () => {
       const {qtdNumeros} = this.state
       const numeros = []
       for(let i = 0; i <qtdNumeros; i++) {
            numeros.push(this.gerarNumeroNaoContido(numeros))
       }
       numeros.sort((a, b) => a - b)
       this.setState({ numeros });
    };

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map( num => {
            return <Numero key = {num} num={num} />
        })
    }


    render () {
        return (
            <>
                <Text style={estilo.fontG}> Gerador de Mega-Sena </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={this.alterarQtdNumero}
                />
                <Button
                    title= 'Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}> 
                    {this.exibirNumeros()}
                </View>
            </>
        );
    }
}
