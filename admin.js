'use strict';

let game = {
    rows: 0,
    cols: 0,
    titulo :"",
    temas : [], //arreglo de strings que tendrá los títulos de los temas
    preguntas: [] 
}

let countTemas = 0; // Contador para controlar los temas
let coordenadas = {fila:0,columna:0};
//Aquí obten el input de titulo
let title = document.getElementById("inTitulo");
//Aquí busca y guarda el elemento del botón de Generar Tablero
let btnTab = document.getElementById("btnTablero");
//Aquí busca y guarda el elemento del botón de Generar JSON
let btnJson =document.getElementById("btnJson");
//aquí guarda la única tabla en el html (no tiene id)
let tab = document.getElementsByTagName("table")[0];
//aquí guarda el botón de guardar de la ventana modal. 
let btnGuardar =  document.getElementById("btSave");


//almacenará la celda actual (cuando den clic en algún link a editar)
let cell;  //esta variable se usará después en la función de solicitarDatos()

//aquí guarda el modal pregunta
let pregunta = document.querySelector(".pregunta");
//aquí guarda el modal tema
let tema = document.querySelector(".tematica");
//aquí guarda el modal json
let json = document.querySelector(".json");


//añade un handler a keyup para que cuando el titulo tenga texto se active el boton
// y si no tiene que se desactive  (añade o quita la clase disabled) 

title.addEventListener("keyup", (e)=>{
    if(title.value.trim() ==''){
        if(!btnTab.classList.contains("disabled")) return btnTab.classList.add("disabled");
        return;
    
        
    }
    return btnTab.classList.remove("disabled");
     
})


/*
*  Aquí añadele al botón de btnTablero un handler del evento click a la función generarTablero
*/

 btnTab.onclick = generarTablero;

/* la función generar tablero:
*  guarda en el objeto game los valores de titulo, row y cols
*  además muestra la tabla pero oculta los renglones y columnas no necesarios 
*/
function generarTablero(event) {
    //guarda en las variables titulo,  rows, y cols los elementos correspondientes del html
    event.preventDefault();
    let titulo = title.value;
    let rows = document.getElementById("inFilas").value;
    let cols = document.getElementById("inColumnas").value;
    //console.log(rows)
    //muestra la tabla (propiedad hidden)
    tab.removeAttribute("hidden");
    
    //guarda el  titulo en el objeto game
    game.titulo=titulo
    //guarda los valores  (si rows o cols es > 4 dejala en 4 si es menor a 2 dejala en 2)
    game.rows=rows
    game.cols=cols
    if(rows > 4){
        game.rows=4
    }
    if(rows <2){
        game.rows=2
    }
    if(cols > 4){
        game.cols=4
    }
    if(cols <2){
        game.cols=2
    }

    //crea el arreglo de temas en el objeto game
   let temas = [];
   for(let i=0; i<game.cols; i++){
        temas.push("Tema");
   }

   game.temas = temas;

   //crea la matriz de preguntas en el objeto game

   let preguntas = [];

   for(let i=0; i<game.cols;i++){
       let arr = [];
       for(let j=0; j<game.rows;j++){
           arr.push("");
       }
       preguntas.push(arr); 
   }

   game.preguntas = preguntas;


    
    

    //console.log("rows:" +game.rows);
    //console.log("cols:" +game.cols);

    //oculta renglones y columnas innecesarios 
    //tip: primero muestra todo (tr, td y th) puedes usar un forEach  (se puede en una línea de código)

    //selecciona los reglones usando nth-of-type(n+ algo ) y oculta

    //selecciona las columnas usando nth-of type(n+ algo ) para td y th

     //console.log(tab.children);
     let tabHead = tab.children[0];
     //console.log(tabHead);
     let tabBody = tab.children[1];
     //console.log(tabBody);
     let head = tabHead.getElementsByTagName("tr");
     //console.log(head[0].children);
 
     let body = tabBody.getElementsByTagName("tr"); //con esto trabajaré las celdas de la tabla
     console.log(body);

     console.log(body[0].children);
     
     let headers = head[0].children; //Con esto trabajaré los headers de la tabla
     console.log(headers);
 
     for(let i=4; i > game.cols; i--){
            headers[i].hidden = true;
            for(let j=4; j > game.cols; j--){
                for(let k=0; k<4; k++){
                    body[k].children[j].hidden = true;
                }

            }
     }

     for(let i=3; i > game.rows-1;i--){
        body[i].hidden = true;
     }
   

    //activar botón de generarJSON
    btnJson.classList.remove("disabled");
    

    return false;

}

//Aquí asocia evento click a la función solicitarDatos(event)
//tab.on
tab.onclick =solicitarDatos;
//completa la función solicitarDatos(event)
function solicitarDatos(event){
    //filtrar, si no son tipo anchor Tag salirse de la función
    if (event.target.nodeName!= "A") return;
    //console.log(event.target.nodeName);

    //actualiza la variable cell (que sea una celda tipo td o th)
    cell = event.target.parentNode;
    //console.log(cell);

    pregunta.hidden = false;
    tema.hidden = false;
    json.hidden = false;

    //si están en un TH mostrar el modal solo la parte de la temática
    //Añade al valor el tema que se tiene guardado en el objeto
    if (cell.nodeName === "TH"){

        countTemas = cell.cellIndex-1;
        tema.querySelector("input").value = game.temas[countTemas];
    
        pregunta.hidden = true;
        json.hidden = true;
    }
        //si están en un TD mostrar el modal solo la parte de la pregunta
        //Muestra el Tema y el valor
        //Muestra el valor de la pregunta
    else if (cell.nodeName === "TD") {

        coordenadas.columna = cell.parentNode.rowIndex-1;
        coordenadas.fila = cell.cellIndex-1;

        //obtenemos el tema de texto tema 
        pregunta.querySelector("#modalTema").innerText = game.temas[coordenadas.fila];
        let valor = tab.querySelector(`tbody tr:nth-of-type(${coordenadas.columna+1}) td:first-of-type`).innerText;
        //obtenemos el valor de texto valor
        pregunta.querySelector("#modalValor").innerText = valor;
        //obtenemos posicion
        let preguntaGame = game.preguntas[coordenadas.fila][coordenadas.columna];

        if (preguntaGame.length > 0){
        pregunta.querySelector("textarea").value = preguntaGame;
        } 
        else {
            pregunta.querySelector("textarea").value = "";
        }
        tema.hidden = true;
        json.hidden = true;
    }
   


}

// Aquí asocia al btnJson el handler al hacer click con la función generarJSON
btnJson.onclick = generarJSON;

//completa la función
function generarJSON(event){
    //que solo muestre lo necesario para ver el JSON en la ventana modal
    json.hidden = false;
    pregunta.hidden = true;
    tema.hidden = true;
    let jsonText = document.querySelector("#taJson")
    var myJson = JSON.stringify(game)
    jsonText.innerHTML=myJson
    return false;
}

//aquí asocia a btnGuardar 
//
btnGuardar.onclick = guardarDatos;

function guardarDatos(event){
    // realiza las operaciones dependiendo en caso de pregunta o tema
    if(cell.nodeName === "TH") {

        let valtema = tema.querySelector("input").value;

        tab.querySelector(`thead tr th:nth-of-type(${countTemas+2}) a`).innerText = valtema;

        game.temas[countTemas] = valtema;

    } else if (cell.nodeName === "TD") {
        let valpregunta = pregunta.querySelector("textarea").value;
        if (valpregunta.length > 0) {
        cell.style.backgroundColor = 'BLACK';
        } 

        game.preguntas[coordenadas.fila][coordenadas.columna] = valpregunta;
    }

}
