let botonComprar = document.getElementById("botonComprar"); // vinculo boton comprar

// listas:
let stock = [10, 11, 12, 13, 14];
let productos = ["azucar", "leche", "huevos", "aceite", "café"];
let precioUnitario = [100, 100, 100, 100, 100];
let unidades = [];        
let total =  0;

  for (let i = 0; i < productos.length; i++) {
    let listaProductos = document.getElementById("listaProductos"); //tomo la lista productos
    let nuevoProducto = document.createElement("li"); //creo un nuevo elemento de la lista
    nuevoProducto.innerHTML = productos[i]; // modifico el nuevo elemento agregando los productos
    listaProductos.appendChild(nuevoProducto); // agrego hijo a la lista productos

    let listaPrecios = document.getElementById("listaPrecios"); // tomo la lista precios
    let precioProducto = document.createElement("li"); // creo un nuevo elemento de la lista
    precioProducto.innerHTML = precioUnitario[i]; // modifico el nuevo elemento con los precios
    listaPrecios.appendChild(precioProducto); // agrego hijo a la lista precios
    let divInput = document.getElementById("divInput");
    let nuevoInput = document.createElement("input");
    divInput.appendChild(nuevoInput);
    nuevoInput.classList.add("inputEstilo"); // agrego margenes. Estilo desde JS
    nuevoInput.type = "number"; // especifico el tipo de los input   
    nuevoInput.id = `selector-${i}`; //asigna a cada input un ID diferente mediante el loop.
    nuevoInput.min = "0";
  
  }
  
// función comprar al hacer click en el boton
botonComprar.addEventListener("click", comprar);
function comprar (){ for (let i = 0; i < productos.length; i++) {   
  let valores = document.getElementById(`selector-${i}`); // variable toma cada ID de los input
  let valoresSeleccionados = valores.value
    unidades.push(valoresSeleccionados);
if (unidades[i]>stock[i]) {   
alert ("Elija una cantidad menor del siguiente producto: " + productos[i]);
valores.classList.add("rojo")
}
else{
  total += precioUnitario[i]*valoresSeleccionados;
  valores.classList.add("negro")
}
}  
let totalEnPantalla = document.getElementById("totalEnPantalla");
totalEnPantalla.innerHTML = ("El total es de " + total);
console.log("el total es de " + total)

unidades.length=0;
total = 0;
} 

