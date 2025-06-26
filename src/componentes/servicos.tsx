import { ArrowLeftIcon, ListBulletIcon, ScissorsIcon, TrashIcon } from "@heroicons/react/24/solid"
import { Component } from "react"
import Modal from "./Modal"

type props = {
    tema: string
    seletorView: (novaTela: string, evento: any) => void
}

type state = {
    modalAberto: boolean,
    modalConteudo: React.ReactNode
}

export default class Servicos extends Component<props, state> {
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
                <div className="flex w-full p-4 bg-[#dba2eb]">
                    <button
                        className="flex p-4 items-center text-xl hover:bg-purple-600 transition rounded-xl"
                        onClick={(e) => this.props.seletorView('Home', e)}
                    >
                        <ArrowLeftIcon className="h-5 w-5" />
                        Voltar
                    </button>
                </div>
                <div className="w-full flex justify-center bg-[#dba2eb]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl p-4">
                        <button
                            className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full hover:bg-purple-600 transition bg-[#d07af0]"
                            onClick={() =>
                                this.abrirModal(
                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-xl font-bold">Informe o nome do serviço a ser atualizado:</h2>
                                        <input
                                            className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                            type="text"
                                            placeholder="Código do serviço"
                                        />
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Novo Nome
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" />
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Novo Valor
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" />
                                        <div className="flex justify-end gap-3">
                                            <button
                                                onClick={this.fecharModal}
                                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-purple-700"
                                            >
                                                Confirmar
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        >
                            <ScissorsIcon className="h-16 w-16 mb-4" />
                            Atualizar Serviço
                        </button>
                        <button
                            className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full hover:bg-purple-600 transition bg-[#c35de8]"
                            onClick={() =>
                                this.abrirModal(
                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-xl font-bold">Informe o nome do serviço a ser excluído:</h2>
                                        <input
                                            className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                            type="text"
                                            placeholder="Código do serviço"
                                        />
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
                            <TrashIcon className="h-16 w-16 mb-4" />
                            Excluir Serviço
                        </button>
                        <button className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full hover:bg-purple-600 transition bg-[#b358e8]">
                            <ListBulletIcon className="h-16 w-16 mb-4" />
                            Listagem
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