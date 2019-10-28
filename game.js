'use strict';

//se puede usar esta o la que vimos en la práctica 
//para usar esta se debe usar async al declarar la función y poner datos= await loadJSON(url)
async function loadJSON(url){
    let respuesta;
    try{
        respuesta  = await fetch(url);
        let juego = await respuesta.json()
        return juego;
    }catch(err){
        return "";
    }
        
}

