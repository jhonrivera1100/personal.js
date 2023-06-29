
let i = 1;
let numero = prompt("Introduzca un número");
if (numero%numero!==0){
    console.log("no funciona :c")
}
do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`pingpong ${i}`);
  } else if (i % 3 === 0) {
    console.log(`ping ${i}`);
  } else if (i % 5 === 0) {
    console.log(`pong ${i}`);
  } else {
    console.log(i);
  }
  
  i++;
} while (i <= numero);