import { ArrowLeftIcon, ListBulletIcon, UserCircleIcon, UserMinusIcon } from "@heroicons/react/24/solid"
import { Component } from "react"
import Modal from "./Modal"

type props = {
    tema: string
    seletorView: (novaTela: string, evento: any) => void
}

type state = {
    mostrarListagens: boolean,
    atualizarCliente: boolean,
    modalAberto: boolean,
    modalConteudo: React.ReactNode
}

export default class Clientes extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            mostrarListagens: false,
            atualizarCliente: false,
            modalAberto: false,
            modalConteudo: null
        }
        this.handleListagensClick = this.handleListagensClick.bind(this)
        this.handleAtualizarClienteClick = this.handleAtualizarClienteClick.bind(this)
    }

    abrirModal = (conteudo: React.ReactNode) => {
        this.setState({ modalAberto: true, modalConteudo: conteudo })
    }

    fecharModal = () => {
        this.setState({ modalAberto: false, modalConteudo: null })
    }

    handleListagensClick() {
        this.setState((prevState) => ({
            mostrarListagens: !prevState.mostrarListagens,
            atualizarCliente: false 
        }))
    }

    handleAtualizarClienteClick() {
        this.setState((prevState) => ({
            atualizarCliente: !prevState.atualizarCliente,
            mostrarListagens: false 
        }))
    }

    render() {
        return (
            <>
                <div className="flex w-full p-4 bg-[#dba2eb]">
                    <button
                        className="flex p-4 items-center text-xl hover:bg-purple-600 transition rounded-xl"
                        onClick={(e) => this.props.seletorView('Home', e)}
                    >
                        <ArrowLeftIcon className="h-5 w-5" />
                        Voltar
                    </button>
                </div>
                <div className="flex flex-wrap p-4 gap-5 justify-center bg-[#dba2eb]">
                    <button
                        className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full max-w-xs hover:bg-purple-600 transition bg-[#d07af0]"
                        onClick={this.handleAtualizarClienteClick}
                    >
                        <UserCircleIcon className="h-16 w-16 mb-4" />
                        Atualizar Cliente
                    </button>
                    <button
                        className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full max-w-xs hover:bg-purple-600 transition bg-[#c35de8]"
                        onClick={() =>
                            this.abrirModal(
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-xl font-bold">Informe o CPF do cliente a ser excluído: </h2>
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                                        <input 
                                            className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                                            id="first_name" 
                                            type="text" />
                                    </label>
                                    <div className="flex justify-end gap-3">
                                        <button
                                            onClick={this.fecharModal}
                                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Confirmar
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    >
                        <UserMinusIcon className="h-16 w-16 mb-4" />
                        Excluir Cliente
                    </button>
                    <button
                        className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full max-w-xs hover:bg-purple-600 transition bg-[#b358e8]"
                        onClick={this.handleListagensClick}
                    >
                        <ListBulletIcon className="h-16 w-16 mb-4" />
                        Listagens
                    </button>
                </div>

                {this.state.atualizarCliente && (
                    <div className="flex flex-wrap p-4 gap-4 justify-center bg-[#dba2eb]">
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Nome</button>
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Nome Social</button>
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Gênero</button>
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualiar CPF</button>
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar RGs</button>
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Telefones</button>
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Produtos</button>
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Serviços</button>
                    </div>
                )}

                {this.state.mostrarListagens && (
                    <div className="flex flex-wrap p-4 gap-4 justify-center bg-[#dba2eb]">
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">listagem Geral</button>
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Listagem por genero</button>
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Maiores consumidores</button>
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Menores consumidores</button>
                        <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Top 5 (Valor)</button>
                    </div>
                )}
                <Modal isOpen={this.state.modalAberto} onClose={this.fecharModal}>
                    {this.state.modalConteudo}
                </Modal>

            </>
        )
    }
}