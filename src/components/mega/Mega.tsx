/* eslint-disable react-native/no-inline-styles */
import React, {Component} from "react";
import { Text, TextInput } from "react-native";
import estilo from "../estilo";

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros
    };

    alterarQtdNumero = (qtde) => {
        this.setState({ qtdNumeros: qtde }); // Corrige o nome do estado
    };

    render () {
        return (
            <>
                <Text style={estilo.fontG}> Gerador de Mega-Sena {this.state.qtdNumeros}</Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtde de Números"
                    value={String(this.state.qtdNumeros)} // Certifique-se de que o valor seja uma string
                    onChangeText={this.alterarQtdNumero} // Use onChangeText
                />
            </>
        );
    }
}
