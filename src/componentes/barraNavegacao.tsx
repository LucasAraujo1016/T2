import { Component } from "react";

type props = {
    tema: string,
    botoes: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this)
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = this.props.botoes.map(valor =>
                <li key={valor}>
                  <button
                    className="px-4 py-2 rounded hover:bg-purple-600 transition"
                    onClick={(e) => this.props.seletorView(valor, e)}
                  >
                    {valor}
                  </button>
                </li>
            )
            return lista
        }
    }

    render() {
        return (
            <nav className="bg-purple-400 p-4 shadow">
                <div className="flex flex-wrap justify-between items-center w-full mx-auto">
                    <span className="font-bold text-lg sm:text-xl text-purple-700 mb-2 sm:mb-0">WB</span>
                    <ul className="flex flex-wrap gap-2 sm:gap-4 overflow-x-auto">
                        {this.gerarListaBotoes()}
                    </ul>
                </div>
            </nav>
        )
    }
}