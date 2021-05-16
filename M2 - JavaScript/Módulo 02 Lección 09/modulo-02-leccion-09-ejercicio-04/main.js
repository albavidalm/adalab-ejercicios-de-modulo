"use strict";
/* PASOS:
1. console.log del nñumero de tareas
2. Pintar las tareas con sus check en el HTML
3. Identificar las tareas hechas => tasks[i].completed === true
4. Asignarles clases para que en el CSS sepa q tiene que hacer un transform para tacharlas, para eso declaramos className y acumulamos. En la línea donde añadimos los <li> le añadimos => class="${className} para que sepa dónde debe agregar el classList
5. Hacer que si el texto estaba tachado se marque el checked. La propiedad checked la recibe el input => ${checked}
6. Hacer que cuando cliquemos un checkbox el texto se tache automático: Trabajamos sobre un EVENTO EN LOS INPUTS por lo que antes de empezar les añadimos => class="js-checkbox"
7. Cuando la función del evento funciona debemos indicarle que cambie los valores de completed en función de si están marcados o no
*/

const ulElement = document.querySelector(".js-list");
const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

console.log(tasks.length);

function paintTasks() {
  let html = ""; //Guarda lo que genero abajo en la línea html y al salir de la iteración xq no se cumple guarda el total.
  let className = ""; //Guarda la clase "cross-out" si es q la tiene
  let checked = "";
  for (let i = 0; i < tasks.length; i++) {
    //let task = tasks[i]; Esta línea nos serviría si en la siguiente línea escribiéramos ${task.name}
    if (tasks[i].completed === true) {
      className = "cross-out";
      checked = "checked";
    } else {
      className = "";
      checked = "";
    }
    html += `<li class="${className}"><input class="js-checkbox" type="checkbox" value="${i}" ${checked}/>${tasks[i].name}</li>`;
  }
  ulElement.innerHTML = html;
  listenCheck(); // Función que escucha el check. La llamamos aquí que es cuando ha escuchado todos los eventos
}

/* Buscamos todos los elementos con checkbox y los guardamos en una constante para poder escuchar el evento. Como estos se encuentran en un array debemos recorrerlos con un loop ______*/

function listenCheck() {
  const checkboxElements = document.querySelectorAll(".js-checkbox");
  for (let i = 0; i < checkboxElements.length; i++) {
    checkboxElements[i].addEventListener("change", handlerCheck);
  }
}
function handlerCheck(e) {
  const checked = e.target.value;
  tasks[checked].completed = !tasks[checked].completed; //Aquí le indicamos q haga lo contrario, si está checked q es TRUE lo pasamos a FALSE
  paintTasks(); //Volvemos a llamar a esta función para que cuando haga el cambio de TRUE FALSE sepa que tiene aplicar o desaplicar la clase de CSS
}

paintTasks();
