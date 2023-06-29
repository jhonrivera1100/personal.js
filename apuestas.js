let plata=5000;
while(plata>0 && plata<10000){
let numero= prompt("numero al que le va a apostar");
let apuesta= prompt(`cuanto vas a apostar`);
let x=Math.floor(5);
    alert(x);
if(numero==x){
    plata += apuesta*3;
    console.log(`ganaste, tu saldo es ${plata}`);
    
}
else (numero!==x) 
    plata -= apuesta;
    console.log(`perdiste ${apuesta}`,`tu saldo es ${plata}`);
if (apuesta>plata){
    console.log("no tenes saldo sapa");
}
    
}