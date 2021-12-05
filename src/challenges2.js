// Desafio 10
 function techList(tec, name) {
  lista = [];
  if (tec.length == 0) {
    return 'Vazio!';
  }
  tec.sort();//cria lista ordenada.
  for (var key in tec){
    lista.push({
      tech: tec[key],
      name: name
    })
  }
  return lista;
}

// Desafio 11
function generatePhoneNumber(array) {

  let iRepete=[];
  let parenteses = ["("+ array[0] + array[1] +")"];
  let primeirosNumeros = [" "+array[2] + array[3] + array[4] + array[5]+ array[6]];
  let ultimosNumeros = ["-" + array[7] + array[8] + array[9] + array[10]];
  let telefoneCompleto = parenteses + primeirosNumeros + ultimosNumeros;

    for(i of array){
      i===array[i];
      iRepete.push(array[i]);
      if(iRepete.length>3){
        return "não é possível gerar um número de telefone com esses valores";
      }
    };
  
    for(let x of array){
      if(x<0 || x> 9 ){
      return "não é possível gerar um número de telefone    com esses valores";
      } 
    };
  


    for(let n of array){
    
      if (array.length < 11 && array.length > 11){
        return "Array com tamanho incorreto.";

      } else {
        return telefoneCompleto;

      }
    };

}


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
