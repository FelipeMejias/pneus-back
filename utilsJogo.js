import { listaJogos } from "./index.js"

export function acharJogo(codigo){
    for(let k=0;k<listaJogos.length;k++){
        const jogo=listaJogos[k]
        if(jogo.nCodigo==codigo)return {jogo,k}
    }
}
export function editarJogo(jogo,k){

    listaJogos.splice(k, 1, jogo)
}