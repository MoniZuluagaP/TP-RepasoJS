import {encontrarPersonaje, traerPersonajes, mostrarMiembrosFamilia, agregarNuevoPersonaje, eliminarPersonajesID} from "./GameOfThrones.js";

const idNedStark = 6;

const nuevoStark = {
    id: 53,
    firstName: "Monica",
    lastName: "Stark",
    fullName: "Monica Stark",
    title: "Lady of Cols",
    family: "House Stark",
    image: "moni.jpg",
    imageUrl: "https://thronesapi.com/assets/images/bronn.jpg"
}

function GameOfThronesAPI () {
    setTimeout(() => {
        encontrarPersonaje (idNedStark);
    }, 0);
    
    setTimeout(() => {
        traerPersonajes ();
    }, 2000);
    
    setTimeout(() => {
        mostrarMiembrosFamilia ('House Stark');
    }, 4000);
    
    setTimeout(() => {
        agregarNuevoPersonaje(nuevoStark);
    }, 6000);
    
    setTimeout(() => {
        eliminarPersonajesID (25);
    }, 8000);
}

GameOfThronesAPI();