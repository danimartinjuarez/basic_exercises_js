/* Ejercicios:
Escribe un programa que escriba en la pantalla un texto que diga “Hello World”.
Escribe un programa que escriba en la pantalla el resultado de sumar 3 + 5.
Escribe un programa que pida el nombre del usuario con un prompt o utilizando un input y escriba un texto que diga “Hola nombreUsuario"
Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Requisito:
Utilizar javascript
La salida en pantalla debe hacerse en el navegador (Terminal no)*/

//Escribe un programa que escriba en la pantalla un texto que diga “Hello World”.
const textInh1 = printText("Hello Word");
function printText(textToPrint){
    document.getElementById("main").innerHTML += `<h1>${textToPrint}</h1>`;
}

// Escribe un programa que escriba en la pantalla el resultado de sumar 3 + 5.
const a=3;
const b=5;
const result = a+b
const threePlusEigth= printText(result);

//Escribe un programa que pida el nombre del usuario con un prompt o utilizando un input y escriba un texto que diga “Hola nombreUsuario"
const nameOfUser=window.prompt("Cual es tu nombre?")
if(nameOfUser===null){
    printText("Hola desconocido");
}
else if(nameOfUser==""){
    printText("Hola tu");
}else{
    printText("Hola "+ nameOfUser);
}

//Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
const buttonEqual = document.getElementById("equal");
buttonEqual.onclick= operation;
function operation(){
    const num1= document.getElementById("num1").value;
    const num2= document.getElementById("num2").value;
    const result=(parseInt(num1)+parseInt(num2));
    const printResult=document.getElementById("result")
    printResult.innerHTML=result;
}

