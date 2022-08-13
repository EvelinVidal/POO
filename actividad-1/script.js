// boton sumar
let botonSumar = document.getElementById("botonSumar"); //boton vinculado
botonSumar.addEventListener("click", sumarOperacion); //agrego evento

let primerValor = document.getElementById("primerValor"); //recibo el primer valor
let segundoValor = document.getElementById("segundoValor"); //recibo el segundo valor 

total = 0; 
function sumarOperacion (){
    total = total + (parseInt(primerValor.value) + parseInt(segundoValor.value));
document.getElementById("resultado").innerHTML="el resultado es: " + (total);
console.log(total)
total = 0;
document.getElementById("titulo").classList.add("tituloVioleta");
}
// boton restar
let botonRestar = document.getElementById("botonRestar");
botonRestar.addEventListener("click", restar);
function restar (){
    total = total + (parseInt(primerValor.value) - parseInt(segundoValor.value));
document.getElementById("resultado").innerHTML="el resultado es: " + (total);
console.log(total)
total = 0;
document.getElementById("titulo").classList.toggle("tituloRosa");
}



