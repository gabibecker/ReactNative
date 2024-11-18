import React, {Component} from "react";
import { Text, TextInput } from "react-native";
import estilo from "../estilo";

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros
    };

    alterarQtdNumero(qtde) {
        this.setState({qtdeNumeros: qtde})
    }

    render () {
        
        return (
            <>
            <Text style = {estilo.fontG}> Gerador de Mega-Sena {this.state.qtdNumeros}</Text>
            <TextInput 
            placeholder="Qtde de Números"
            value = {this.state.qtdNumeros}
            onChange={this.alterarQtdNumero}
            />
            </>
        );
    }
}
