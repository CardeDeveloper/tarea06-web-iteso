'use strict';

let game = {
    rows: 0,
    cols: 0,
    titulo :"",
    temas : [], //arreglo de strings que tendrá los títulos de los temas
    preguntas: [] 
}

//Aquí obten el input de titulo
let title;
//Aquí busca y guarda el elemento del botón de Generar Tablero
let btnTab;
//Aquí busca y guarda el elemento del botón de Generar JSON
let btnJson;
//aquí guarda la única tabla en el html (no tiene id)
let tab;
//aquí guarda el botón de guardar de la ventana modal. 
let btnGuardar;


//almacenará la celda actual (cuando den clic en algún link a editar)
let cell;  //esta variable se usará después en la función de solicitarDatos()


//añade un handler a keyup para que cuando el titulo tenga texto se active el boton
// y si no tiene que se desactive  (añade o quita la clase disabled) 

//<<<


/*
*  Aquí añadele al botón de btnTablero un handler del evento click a la función generarTablero
*/

 //btnTab.on

/* la función generar tablero:
*  guarda en el objeto game los valores de titulo, row y cols
*  además muestra la tabla pero oculta los renglones y columnas no necesarios 
*/
function generarTablero(event) {
    //guarda en las variables titulo,  rows, y cols los elementos correspondientes del html
    
    let titulo = document.getElementById("inTitulo");
    let rows = document.getElementById("inFilas");
    let cols = document.getElementById("inColumnas");

    //muestra la tabla (propiedad hidden)
    
    //guarda el  titulo en el objeto game
    
    //guarda los valores  (si rows o cols es > 4 dejala en 4 si es menor a 2 dejala en 2)
    

    //crea el arreglo de temas en el objeto game
   

    //crea la matriz de preguntas en el objeto game
    

    //oculta renglones y columnas innecesarios 
    //tip: primero muestra todo (tr, td y th) puedes usar un forEach  (se puede en una línea de código)
    //selecciona los reglones usando nth-of-type(n+ algo ) y oculta
    //selecciona las columnas usando nth-of type(n+ algo ) para td y th

    

    //activar botón de generarJSON
    

    //regresa falso o usa 
    //event.preventDefault()
    //return false;

}

//Aquí asocia evento click a la función solicitarDatos(event)
//tab.on

//completa la función solicitarDatos(event)
function solicitarDatos(event){
    //filtrar, si no son tipo anchor Tag salirse de la función
   
    //actualiza la variable cell (que sea una celda tipo td o th)
    //cell=;
      
    
    //si están en un TH mostrar el modal solo la parte de la temática
    //Añade al valor el tema que se tiene guardado en el objeto
   
    //si están en un TD mostrar el modal solo la parte de la pregunta
    //Muestra el Tema y el valor
    //Muestra el valor de la pregunta

}

// Aquí asocia al btnJson el handler al hacer click con la función generarJSON
//btnJson.on


//completa la función
function generarJSON(event){
    //que solo muestre lo necesario para ver el JSON en la ventana modal
    return false;
}

//aquí asocia a btnGuardar 
//btnGuardar.on

function guardarDatos(event){
    // realiza las operaciones dependiendo en caso de pregunta o tema
 
}


















