"use strict"
console.log("Repasando JavaScript II")

var tareas = [
{nombre: "Recoger setas en el campo", completada: true},
{nombre: "Comprar pilas", completada: true},
{nombre: "Poner una lavadora de blancos", completada: true},
{nombre: "Aprender cómo funcionan los objetos de JavaScript", completada: false}
]

var laTarea = tareas[0]


var lista = document.querySelector("ul")



for (var i = 0; i < tareas.length; i++) {
  var tarea = tareas[i]
  var elementoDeLaLista = "<li>" + tarea.nombre + "</li>"
  if (tareas[i].completada === true){
    elementoDeLaLista = "<li class='tachado'>" + tarea.nombre + "</li>"
  }
  lista.innerHTML = lista.innerHTML + elementoDeLaLista

}

//lista.innerHTML = "<li class='tachado'>" + laTarea.nombre + "</li>" + "<li class='tachado'>" + tareas[1].nombre + "</li>" + "<li class='tachado'>" + tareas[2].nombre + "</li>" + "<li>" + tareas[3].nombre + "</li>"


//<li class='tachado'>"
//document.querySelector("li").style["text-decoration"]="line-through"

//document.querySelector("li").classList.add ("tachado")


function tacharTarea() {

  event.target.selectedIndex
  document.querySelector("myCheck").checked = true

  input.addEventListener ("change", cleck)
}

function uncheck() {
  document.getElementById("myCheck").checked = false
}


