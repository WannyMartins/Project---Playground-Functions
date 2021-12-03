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
function generatePhoneNumber() {
  // seu código aqui
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
