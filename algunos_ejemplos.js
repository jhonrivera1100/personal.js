 /*alert("introduzca tres profesores")
 let n1=prompt("primer");
 let m1=prompt("materia 1")
 let n2=prompt("segundo");
 let m2=prompt("materia 2")
 let n3=prompt("tercero");
 let m3=prompt("materia 3")
 const profesor = [{nombre:n1, materias:m1, },{ nombre: n2, materias:n2, },{nombre:n3,materias:m3,}];
console.log(profesor);
console.table(profesor);*/



/*
const profesores=[];
const p1= {
    nombre: prompt("nombre 1"),
    asignatura:prompt("asign 1"),
    tema:prompt("tema 1"),
};
const p2= {
    nombre: prompt("nombre 2"),
    asignatura:prompt("asign 2"),
    tema:prompt("tema2"),
};
const p3= {
    nombre: prompt("nombre3"),
    asignatura:prompt("asign3"),
    tema:prompt("tema3"),
};
profesores.unshift(p3);
profesores.push(p2);
profesores.push(p1);

console.log(profesores);
console.table(profesores); */


/*
const nombres= ["jhon","manuel","julian","daniel"];
const [n1,n2,n3,n4] = nombres;
console.log (n4,n1); DESTRUCTURING VALORES*/


//FUNCIONES
/*
function bienvenido (nombre,apellido,ciudad){
    
    console.log(`bienvenido al aplicativo educatio ${nombre} ${apellido} se encuentra en la ciudad de ${ciudad}`)

}
bienvenido(prompt("digite su nombre"),prompt("digite su apellido"),prompt("digite su ciudad"));*/  
/*
function alumno(ciudad,hora) {
    console.log("bienvenido solicitaste una clase en",ciudad,"a la hora",hora)
}
alumno("popayan", 4);
alumno("cali",5);*/
/*
let total=0;
function agregar(precio) {
    return total+=(precio);
    
}
function iva() {
    return total*1.19;
    
}

total=agregar(500);
total=agregar(500);
total=agregar(2000);
const totalpagar= iva(total);
console.log(total);
console.log(`el valor total a pagar es ${totalpagar}`);*/

//reproductor
/*const reproductor={
    play:function (params) {
        console.log("la cancion esta siendo reproducida")        
    },
    stop:function(){
        console.log("pauso la cancion")
    },
    siguiente:function (siguiente) {
        console.log(`se reproducira la siguiente cancion ${siguiente}`)
        
    },
    anterior:function (anterior) {
        console.log(`se reproducira la anterior cancion ${anterior}`);
        
    }
}
reproductor.play()
reproductor.stop()
reproductor.siguiente("perreo en la disco")
reproductor.anterior("tu rin turan")*/

//flecha funcion
/*
const ap=(asign)=> `estamos viendo ${asign}`;
console.log(ap(`perro con perro`));*/
/*
const edad= prompt("cual es tu edad");
if (edad>=18)
{
    console.log("es mayor de edad");
}
else

{
    console.log("es menor de edad")
}*/

/*
const educatio=[
    {profesor:"jhon",materia:"español"},
    {profesor:"carlos",materia:"fisica"},
    {profesor:"jorge",materia:"quimica"},
    {profesor:"juan",materia:"sistemas"},
    {profesor:"damian",materia:"matematicas"},
    {profesor:"jesus",materia:"ingles"}
]
let x;
for (x=0;x<educatio.length;x++){
    console.table(`EL PROFESOR: ${educatio[x].profesor}`,`Y SU MATERIA ES:${educatio[x].materia}`);
}*/

//ejercicio calificable
/*
let numero=prompt("digite el numero");
let x;
if(numero%numero!==0){
    console.log("no funciona");
}
for(x=0;x<=numero;x++)

if (numero%5==0 && numero%3==0){
    console.log("ping pong");
}
else if(numero%3==0){
    console.log("ping");
}
else if (numero%5==0){
    console.log("pong");
}*/
/*
let i=0;
while (i<=10){
    console.log(`el numero es${i}`);
    i++;
}*/

//ejercicio do while
/*
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
} while (i <= numero);*/
/*
let x=0;
const mes= prompt("introduzca el mes");
for(x=0;x<=mes;x++){
    
    if (x==1){
        console.log("el mes es enero tiene 31 dias y es invierno");
    }
    else if(x==2){
        console.log("el mes es febrero,tiene 28 dias y esta en invierno");

    }
    else if (x==3){
        console.log("el mes es marzo, tiene 31 dias y esta invierno");

    }
    else if (x==4){
        console.log("el mes es abril, tiene 30 dias y esta primavera");
    }
    else if (x==5){
        console.log("el mes es mayo, tiene 31 dias y esta primavera");
    }
    else if (x==6){
        console.log("el mes es junio, tiene 30 dias y esta verano");
    }
    else if (x==7){
        console.log("el mes es julio, tiene 31 dias y esta verano");
    }
    else if (x==8){
        console.log("el mes es agosto, tiene 31 dias y esta verano");
    }
    else if (x==9){
        console.log("el mes es septiembre, tiene 30 dias y esta otoño");
    }
    else if (x==10){
        console.log("el mes es octubre, tiene 31 dias y esta otoño");
    }
    else if (x==11){
        console.log("el mes es noviembre, tiene 30 dias y esta otoño");
    }
    else if (x==12){
        console.log("el mes es diciembre, tiene 31 dias y esta otoño y es navidad");
    }
}*/
/*

let x;
const mes=prompt("escriba el mes");
for(x=0;x<mes;x++){
    if(x==1 || x==3 || x==5){

    }
}*/

// ---switch--- meses
/*
let mes=parseInt(prompt("introduzca el mes"));
if(mes>12){
    console.log("no existe");
}
else if(mes==1 || mes==2 || mes==3){
    console.log("enero, febrero y marzo son invierno");
}
else if(mes==4 || mes==5 ){
    console.log("abril y mayo son primavera");
}
else if(mes==6 || mes==7 || mes==8){
    console.log("junio, julio y agosto son verano");
}
else if(mes==9 || mes==10 || mes==11 || mes==12){
    console.log("septiembre, octubre, noviembre y diciembre son otoño");
}
switch(mes){
    case 1:
    fecha=`el mes es enero y tiene 31 dias es invierno`;
    break;
    case 2:
    fecha=`el mes es febrero y tiene 28 dias es invierno`;
    break;
    case 3:
    fecha=`el mes es marzo y tiene 31 dias es invierno`;
    break;
    case 4:
    fecha=`el mes es abril y tiene 30 dias es primavera`;
    break;
    case 5:
    fecha=`el mes es mayo y tiene 31 dias es primavera`;
    break;
    case 6:
    fecha=`el mes es junio y tiene 30 dias es verano`;
    break;
    case 7:
    fecha=`el mes es julio y tiene 31 dias es verano`;
    break;
    case 8:
    fecha=`el mes es agosto y tiene 31 dias es verano`;
    break;
    case 9:
    fecha=`el mes es septiembre y tiene 30 dias es otoño`;
    break;
    case 10:
    fecha=`el mes es octubre y tiene 31 dias es otoño`;
    break;
    case 11:
    fecha=`el mes es noviembre y tiene 30 dias es otoño`;
    break;
    case 12:
    fecha=`el mes es diciembre y tiene 31 dias es otoño y es navidad`;
    break;
}
console.log(fecha);*/
//50:00:00

// apuestas
/*
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
*/


