export function codigoJogo(){
const listaShuf=shuffle(lista)
return listaShuf[0]+listaShuf[1]+listaShuf[2]+listaShuf[3]
}

export function embJogo(pares){
    const array=[]
    for(let k=0;k<pares;k++){
      array.push(k);array.push(k);
    }
    return shuffle(array)
}
export function imagensJogo(){
    return shuffle(lista24Nums)
}
function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }
  const lista=[
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'x',
    'z',
    'w',
    'y',

]
const lista24Nums=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]