import { atualizar_titulo } from "../actions/ActionTypes"

const estadoInicial = {
    titulo: 'Atualizado via redux'
}

export default (state = estadoInicial, action) => {
    switch (action.type) {
        case atualizar_titulo:
            return { ...state, titulo: action.payload }
        default:
            return state
    }
}