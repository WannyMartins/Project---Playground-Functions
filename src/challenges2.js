// Desafio 10
function techList(tec, name) {
  const lista = [];
  if (tec.length === 0) {
    return 'Vazio!';
  }
  tec.sort();// cria lista ordenada.
  for (let key in tec) {
    lista.push({
      tech: tec[key],
      name: name
    })
  }
  return lista;
}



function telefoneCompleto(array) {
  let parenteses = "(" + array[0] + array[1] + ")";
  let primeirosNumeros = " " + array[2] + array[3] + array[4] + array[5] + array[6];
  let ultimosNumeros = "-" + array[7] + array[8] + array[9] + array[10];

  let telefone = parenteses + primeirosNumeros + ultimosNumeros;
  return telefone

}


// Desafio 11
function generatePhoneNumber(array) {
  let telefone = '';
  let contador = 0;

    if (array.length !== 11) {
      return "Array com tamanho incorreto."
    }
    for (let i = 0; i < array.length; i += 1){
      if (array[i] < 0 || array[i] > 9){
        return "não é possível gerar um número de telefone com esses valores";
      }
      for (let j = 1; j < array.length; j += 1){
        if (array[i] === array[j]){
          contador += 1;
        }
      }
      if (contador >= 3){
        return "não é possível gerar um número de telefone com esses valores";
      }
      contador = 0
    }
  
    let parenteses = "(" + array[0] + array[1] + ")";
    let primeirosNumeros = " " + array[2] + array[3] + array[4] + array[5] + array[6];
    let ultimosNumeros = "-" + array[7] + array[8] + array[9] + array[10];
  
   telefone = parenteses + primeirosNumeros + ultimosNumeros;
    return telefone
  

  }

// Desafio 12
function triangleCheck(a, b, c) {
  if (c < (a + b) && 
    b < (a + c) && 
    a < (c + b) &&
    c > Math.abs(a - b) && 
    b > Math.abs(a - c) && 
    a > Math.abs(c - b)) {
      return true;
    }
    return false;
  // Math.abs retorna o valor absoluto sendo negativo retorna o numero real -1 >>> 1,  1 >> 1, '-1' >>> 1, 
  // null ou vazio >>0, array com mai de um numero, objeto vazio, 
  // string que nao é um numero, e ele próprio vazio retorna NaN
}

// Desafio 13
function hydrate(string) {
  let coposAgua=0
  let novaString = string.replace(/[^0-9]/g,'') // começa a catalogar todos o primeiro numero de 0-9 'g' de forma global sem parar na primeira incidencia, o segundo paragamento mostra ṕra replace substituir tudo o que não for do paramentro anterior por nada.
  for(let number = 0; number < novaString.length; number += 1) {
   coposAgua += parseInt(novaString[number]);// transforma os itens numeros da string em numeros interos podendo ser somado
  }
  return coposAgua > 1 ? coposAgua + ' copos de água' : coposAgua + ' copo de água'
 

  // fonte do replace()>> https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript

  // fonte do regex https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
