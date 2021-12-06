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


  function arrayEhValido(array){
    if(array.length !== 11){
      return false;
    }
    return true;
  }

>>>>>> function repeteMaisDe3(array){
    let numeroAtual=0;
    let repetidoQuantasVezes=0;

    for(let i= 0; i<array.length; i +=1){
      if(array[i]=== numeroAtual){
      repetidoQuantasVezes+=1;
      }
    }
    if (repetidoQuantasVezes > 3) {
      return true;
    }
  }

  function numerosValidos(array){
    for(let numero of array){
      if(numero <  0 || numero > 9){
        return false;
      }
      return true
    }
  }

  function telefoneCompleto(array){
    let parenteses = "("+ array[0] + array[1] +")";
    let primeirosNumeros = " "+array[2] + array[3] + array[4] + array[5]+ array[6];
    let ultimosNumeros = "-" + array[7] + array[8] + array[9] + array[10];

      let telefone = parenteses + primeirosNumeros + ultimosNumeros;
      return telefone

  }

    

/*   function validando(){
    if(numerosValidos === true || repeteMaisDe3 === true){
      return "não é possível gerar um número de telefone com esses valores"
    }else if(arrayEhValido === true){
      return"Array com tamanho incorreto."
    }else{
      return telefoneCompleto
    }
    return validando
  }
 */
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
