import { atualizar_titulo } from "./ActionTypes"

export const atualizarTitulo = titulo => ({
    type: atualizar_titulo,
    payload: titulo
})