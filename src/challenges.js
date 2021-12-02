// Desafio 1
function compareTrue(p1,p2) {
    if(p1 === true && p2 === true) {
      return true
    } else{
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

  let numeroMaior =0;
  let quantidade =0;
  let numerosNegativos=0;
  

  for(let item in numeros){
    if(numeros[item]>numeroMaior){
      numeroMaior=numeros[item];
    }
  
  }
    
    if(numeros<0){
     
     for(let n in numeros){
      if(numeros[n]<numeroMaior){
        numeroMaior=numeros[n];
       
       }
     }
   };

  for(let i in numeros){
    if(numeros[i]  == numeroMaior){
      quantidade+=1;
    };
  }

  return quantidade
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
