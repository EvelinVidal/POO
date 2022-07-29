let contador = 0;
// linea sig: Creo una variable llamada "bnt_aceptar", le paso el valor del ID de boton llamado "button-aceptar".
let bnt_aceptar = document.getElementById("btnAceptar");
// onclick significa que se detecta cuando hago clic sobre el boton -evento-, le asigno la primera variable llamada clicktitulo()
bnt_aceptar.addEventListener("click", mostrar);


function mostrar() {
    let inputNombre = document.getElementById("name");
    let inputApellido = document.getElementById("surname");
    let inputEdad = document.getElementById("age");
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let edad = inputEdad.value;


    alert("bienvenido/a " + nombre + " " + apellido + " " + edad + " años");
}

