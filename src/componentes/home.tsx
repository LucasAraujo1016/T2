import { Component } from "react";
import {UsersIcon, ShoppingBagIcon, ScissorsIcon, ListBulletIcon} from '@heroicons/react/24/solid';


type props = {
    tema: string
    seletorView: (novaTela: string, evento: any) => void
}

export default class PaginaPrincipal extends Component<props> {
    render() {
        return (
            <>
                <h5 className="text-center text-lg md:text-2xl lg:text-3xl font-semibold p-4 md:p-6 pt-8 md:pt-12 bg-gradient-to-r from-pink-400 to-purple-500 text-white">
                    Bem-vindo ao sistema do <span className="ml-2 font-bold italic">Grupo World Beauty</span>
                </h5>
                <div className="flex justify-center bg-[#dba2eb]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl p-4">
                        <button 
                            className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full hover:bg-purple-600 transition bg-[#d07af0]"
                            onClick={(e) => this.props.seletorView('Clientes', e)}
                        >
                            <UsersIcon className="h-16 w-16 mb-4" />
                            Clientes
                        </button>
                        <button 
                            className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full hover:bg-purple-600 transition bg-[#c35de8]"
                            onClick={(e) => this.props.seletorView('Produtos', e)}
                        >
                            <ShoppingBagIcon className="h-16 w-16 mb-4" />
                            Produtos
                        </button>
                        <button 
                            className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full hover:bg-purple-600 transition bg-[#b358e8]"
                            onClick={(e) => this.props.seletorView('Servicos', e)}
                        >
                            <ScissorsIcon className="h-16 w-16 mb-4" />
                            Serviços
                        </button>
                        <button 
                            className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full hover:bg-purple-600 transition bg-[#a94cd4]"
                            onClick={(e) => this.props.seletorView('ListagensEspeciais', e)}
                        >
                            <ListBulletIcon className="h-16 w-16 mb-4" />
                            Listagem especial
                        </button>
                    </div>
                </div>
            </>
        )
    }
}