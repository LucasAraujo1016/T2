import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastro from "./formularioCadastro";
import PaginaPrincipal from "./home";
import Clientes from "./clientes";
import Produtos from "./produtos";
import Servicos from "./servicos";
import ListagensEspeciais from "./listagensEspeciais";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Home', 'Cadastros']} />
        if (this.state.tela === 'Home') {
                return (
                    <>
                        {barraNavegacao}
                        <PaginaPrincipal tema="purple lighten-4" seletorView={this.selecionarView}/>
                    </>
            )
        } else if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <Clientes tema="purple lighten-4" seletorView={this.selecionarView}/>
                </>
            ) 
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <Produtos tema="purple lighten-4" seletorView={this.selecionarView}/>
                </>
            ) 
        } else if (this.state.tela === 'Servicos') {
            return (
                <>
                    {barraNavegacao}
                    <Servicos tema="purple lighten-4" seletorView={this.selecionarView}/>
                </>
            ) 
        } else if (this.state.tela === 'ListagensEspeciais') {
            return (
                <>
                    {barraNavegacao}
                    <ListagensEspeciais tema="purple lighten-4" seletorView={this.selecionarView}/>
                </>
            ) 
        } else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastro tema="purple lighten-4" seletorView={this.selecionarView}/>
                </>
            )
        }
    }
}