import cors from 'cors'
import Express, {json} from 'express'
import { codigoJogo, embJogo, imagensJogo } from './geracoes.js'
import { acharJogo, editarJogo } from './utilsJogo.js'
const app=Express()
app.use(cors())
app.use(json())



const port =process.env.PORT||4000
app.listen(port,()=>console.log(`listening on port ${port}`))

app.post('/jogo',async(req,res)=>{
    const {tema,rep,pares,nome}=req.body
    const codigo=codigoJogo()
    const nImagens=imagensJogo()
    const nEmb=embJogo(pares)
    const jogo={nPlacar:[0,0],nFlop:[],nVez:0,nTema:tema,nRep:rep,nPares:pares,nNomes:[nome,null],nCodigo:codigo,nImagens,nEmb}
    listaJogos.push(jogo)
    res.status(200).send(jogo)
})
app.put('/jogo',async(req,res)=>{
    const {codigo,nome}=req.body
    const {jogo,k}=acharJogo(codigo)
    const novoJogo={...jogo,nNomes:[jogo.nNomes[0],nome]}
    editarJogo(novoJogo,k)
    res.status(200).send(novoJogo)
})
app.get('/jogo',async(req,res)=>{
    res.status(200).send(listaJogos.filter(jog=>!jog.nNomes[1]))
})
app.get('/jogo/:codigo',async(req,res)=>{
    const {codigo}=req.params
    const objetoJogoK=acharJogo(codigo)
    res.status(200).send(objetoJogoK?objetoJogoK.jogo:null)
})
app.put('/jogo/:codigo',async(req,res)=>{
    const {codigo}=req.params
    const {num}=req.body
    const {jogo,k}=acharJogo(codigo)
    const {nEmb,nRep,nVez,nFlop,nPlacar}=jogo
    let novoJogo
    if((nFlop.length==1)){
        let vez
        if(nEmb[nFlop[0]]==nEmb[num]){
            
            let pontos0=nPlacar[0]
            let pontos1=nPlacar[1]
            if(nVez==0)pontos0++
            if(nVez==1)pontos1++
            const placar=[pontos0,pontos1]
            novoJogo={...jogo,nFlop:[...nFlop,num],nVez:3,nPlacar:placar}
            vez=nRep==1?nVez:nVez==0?1:0
        }else{
            novoJogo={...jogo,nFlop:[...nFlop,num],nVez:3}
            vez=nVez==0?1:0
        }
        setTimeout(() => {
            editarJogo({...novoJogo,nFlop:[],nVez:vez},k)
        }, 2000);
    }else{
        novoJogo={...jogo,nFlop:[...nFlop,num]}
    }
    editarJogo(novoJogo,k)
    
    res.status(200).send(novoJogo)
})
export const listaJogos=[]
