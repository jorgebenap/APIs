function uno(dos) {
  console.log("uno");
  setTimeout(dos,2000); //Se imprime después de 2 segundos
}

function dos() {
  console.log("dos");
}

setTimeout(() => uno(dos), 5000); //

const nombre = function(){
  console.log('nombre');
}

nombre();

//arrow functions. 
//Se usan las llaves sólo cuando se escriben mas de dos líneas de código
const persona = () => console.log('George');

persona();