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
console.log(fecha);