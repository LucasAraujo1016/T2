import { Component } from "react";
import Modal from "./Modal";
import { ArrowLeftIcon, ArrowRightIcon, ScissorsIcon, ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

type props = {
    tema: string,
    seletorView: (novaTela: string, evento: any) => void
}

type state = {    
    modalAberto: boolean,
    modalConteudo: React.ReactNode
}

function CadastroClienteModal({ onClose }: { onClose: () => void }) {
    const [etapa, setEtapa] = useState(1);
    const [produtoSelecionado, setProdutoSelecionado] = useState("");
    const [servicoSelecionado, setServicoSelecionado] = useState("");

    return (
        <div className="flex justify-center p-4 sm:p-8">
            <form className="w-full bg-white sm:p-8 rounded shadow mx-2">
                {etapa === 1 && (
                    <>
                        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nome">
                                    Nome <span className="text-red-600">*</span>
                                </label>
                                <input className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="nome" type="text" />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cpf">
                                    CPF <span className="text-red-600">*</span>
                                </label>
                                <input className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" id="cpf" type="text" />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rg">
                                    RG
                                </label>
                                <input className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="rg" type="text" />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="telefone">
                                    Telefone
                                </label>
                                <input className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" id="telefone" type="text" />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                    E-mail
                                </label>
                                <input className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="email" type="email" />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="genero">
                                    Gênero <span className="text-red-600">*</span>
                                </label>
                                <select
                                    id="genero"
                                    className="block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Selecione o gênero</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="flex items-center gap-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setEtapa(2)}
                            >
                                Avançar
                                <ArrowRightIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </>
                )}
                {etapa === 2 && (
                    <>
                        <div className="flex flex-wrap gap-4 -mx-3 mb-6">
                            <div className="w-full px-3 mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="produtos">
                                    Produto
                                </label>
                                <select
                                    id="produtos"
                                    value={produtoSelecionado}
                                    onChange={e => setProdutoSelecionado(e.target.value)}
                                    className="block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                >
                                    <option value="" disabled>Selecione um produto</option>
                                    <option value="produto1">Produto 1</option>
                                    <option value="produto2">Produto 2</option>
                                    <option value="produto3">Produto 3</option>
                                </select>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="servicos">
                                    Serviço
                                </label>
                                <select
                                    id="servicos"
                                    value={servicoSelecionado}
                                    onChange={e => setServicoSelecionado(e.target.value)}
                                    className="block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                >
                                    <option value="" disabled>Selecione um serviço</option>
                                    <option value="servico1">Serviço 1</option>
                                    <option value="servico2">Serviço 2</option>
                                    <option value="servico3">Serviço 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-xs text-gray-500 px-3 mb-4">
                            Para adicionar mais produtos ou serviços, utilize a opção de atualização de cliente após o cadastro.
                        </div>
                        <div className="flex justify-between gap-4">
                            <button
                                type="button"
                                className="flex items-center bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setEtapa(1)}
                            >
                                <ArrowLeftIcon className="h-5 w-5" />
                                Voltar
                            </button>
                            <button
                                type="submit"
                                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Finalizar Cadastro
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}

export default class formularioCadastro extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            modalAberto: false,
            modalConteudo: null
        }
        this.abrirModal = this.abrirModal.bind(this)
        this.fecharModal = this.fecharModal.bind(this)
    }

    abrirModal(conteudo: React.ReactNode) {
        this.setState({ modalAberto: true, modalConteudo: conteudo })
    }

    fecharModal() {
        this.setState({ modalAberto: false, modalConteudo: null })
    }
    render() {
        return (
            <>
                <h5 className="text-center text-lg md:text-2xl lg:text-3xl font-semibold p-4 md:p-6 pt-8 md:pt-12 bg-gradient-to-r from-pink-400 to-purple-500 text-white">
                    Bem-vindo ao cadastro do <span className="ml-2 font-bold italic">Grupo World Beauty</span>
                </h5>
                <div className="w-full flex justify-center bg-[#dba2eb]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl p-4">
                        <button
                            className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full hover:bg-purple-600 transition bg-[#d07af0]"
                            onClick={() =>
                                this.abrirModal(<CadastroClienteModal onClose={this.fecharModal} />)
                            }
                        >
                            <UserCircleIcon className="h-16 w-16 mb-4" />
                            Cadastro Cliente
                        </button>
                        <button
                            className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full hover:bg-purple-600 transition bg-[#c35de8]"
                            onClick={() =>
                                this.abrirModal(
                                    <div className="flex justify-center p-8">
                                        <form className="w-full max-w-lg bg-white p-8 rounded shadow">
                                            <div className="flex flex-wrap -mx-3 mb-6">
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                                                        Nome
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="first_name" type="text" />
                                                </div>
                                                <div className="w-full md:w-1/2 px-3">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
                                                        Valor
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" id="last_name" type="text" />
                                                </div>
                                            </div>                                    
                                            <div className="flex items-center justify-between">
                                                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                                    Finalizar Cadastro
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )
                            }
                        >
                            <ShoppingBagIcon className="h-16 w-16 mb-4" />
                            Cadastro Produto
                        </button>
                        <button
                            className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full hover:bg-purple-600 transition bg-[#c35de8]"
                            onClick={() =>
                                this.abrirModal(
                                    <div className="flex justify-center p-8">
                                        <form className="w-full max-w-lg bg-white p-8 rounded shadow">
                                            <div className="flex flex-wrap -mx-3 mb-6">
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                                                        Nome
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="first_name" type="text" />
                                                </div>
                                                <div className="w-full md:w-1/2 px-3">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
                                                        Valor
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" id="last_name" type="text" />
                                                </div>
                                            </div>                                    
                                            <div className="flex items-center justify-between">
                                                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                                    Finalizar Cadastro
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )
                            }
                        >
                            <ScissorsIcon className="h-16 w-16 mb-4" />
                            Cadastro Serviços
                        </button>
                    </div>
                </div>
                <Modal isOpen={this.state.modalAberto} onClose={this.fecharModal}>
                    {this.state.modalConteudo}
                </Modal>
            </>
        )
    }
}