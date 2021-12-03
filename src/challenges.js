// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true
  } else {
    return false
  }
}


// Desafio 2
function calcArea(base, heigth) {
  let area=(base*heigth)/2;
  return area

}

// Desafio 3
function splitSentence(string){

let split= string.split(" ")


return split
}
 

// Desafio 4
function concatName(param) {
  let resultado;

    
    resultado=param[param.length-1] +", "+param[0];

  
  return resultado


}
// Desafio 5
function footballPoints(wins, ties) {
 let vitorias = wins*3;
 let result= vitorias+ties; 
 return result
}

// Desafio 6
function highestCount(numeros) {
  let numeroMaior = numeros[0];
  let quantidade = 0;
  for(let item in numeros){
    if(numeros[item] > numeroMaior){
      numeroMaior = numeros[item];
    }
  };
  for(let i in numeros){
    if(numeros[i] == numeroMaior){
      quantidade+=1;
    };
  }
  return quantidade
}

// Desafio 7

// a função Math.abs foi encontrada referencias neste link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 < distanciaCat2){
    return 'cat1'
    }else if (distanciaCat1 > distanciaCat2){
    return 'cat2'
  } else if(distanciaCat1 == distanciaCat2) {
    return "os gatos trombam e o rato foge"
  };
}

// Desafio 8

//referencia do for/of tirada do stackoverflow, onde neste caso organizou a varredura no array pelo valor dele: https://pt.stackoverflow.com/questions/90352/qual-%c3%a9-a-diferen%c3%a7a-entre-o-for-of-e-o-for-in
function fizzBuzz(numbers) {

 let resultado = [];
  for(let num of numbers) {
    if(num %3 == 0 && num %5 == 0) {
     resultado.push('fizzBuzz')
    } else if (num %5 == 0) {
      resultado.push('buzz')
    } else if (num %3 == 0) {
      resultado.push('fizz')
    } else {
      resultado.push('bug!');
    }
  }
return resultado;
}

// Desafio 9
function encode(string) {

   let stringEnc='';

  let codigos= {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };

  for(let letra of string){
   stringEnc= stringEnc + (codigos[letra] || letra)
  };

  return stringEnc;
}
 
function decode(string) {
  let stringDec ='';
  let code= {
    1:"a",
    2:"e",
    3:"i",
    4:"o",
    5:"u"
  };
  for(let num of string){
   stringDec= stringDec + (code[num] || num)
  };
  return stringDec;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
