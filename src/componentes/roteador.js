/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import ListaClientes from "./listaClientes";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaPets from "./listaPets";
import ListaServicos from "./listaServicos";
import ListaDadosEspecificos from "./listaDadosEspecificos";
import ListProdutos from "./listaProdutos";
import ListaProdutos from "./listaProdutos";
import RegistrarCompras from "./AssociarCompras";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Cadastros', 'Registro de Compras' ,'Dados Avançados']} />
        if (tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClientes tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastros'){
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                    <FormularioCadastroPet tema="#e3f2fd" />
                    <FormularioCadastroProduto tema="#e3f2fd" />
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPets tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="#e3f2fd" />
                </>
            )

        }else if (tela === 'Serviços' ) {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="#e3f2fd" />
                </>
            )
        }else if (tela === 'Dados Avançados' ) {
            return (
                <>
                    {barraNavegacao}
                    <ListaDadosEspecificos tema="#e3f2fd" />
                </>
            )
        }else if (tela === 'Registro de Compras' ) {
            return (
                <>
                    {barraNavegacao}
                    <RegistrarCompras tema="#e3f2fd" />
                </>
            )
        } else {
            return null //caso nenhuma tela seja adicionada
        }
    }

    return (
        construirView()
    )
}