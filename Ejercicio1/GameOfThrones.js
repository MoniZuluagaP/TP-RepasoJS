'use strict';
// import fetch from "node-fetch";
import fs from 'fs';

const urlApi = "https://thronesapi.com/";

// 1. Funcion para recuperar información del personaje Ned Stark
export async function encontrarPersonaje (id) {

    try {
        const response = await fetch (`${urlApi}api/v2/Characters/${id}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log('\nInformacion de Ned Stark');
        console.table(data);
    } catch (err) {
        console.error('Ha ocurrido un error: ' + err);
    }
}


// 2. Funcion para recuperar todos los personajes disponibles
export async function traerPersonajes () {

    try{
        const response = await fetch (`${urlApi}api/v2/Characters`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log('\nInformacion de todos los personajes');
        console.table(data);
        // 3. Persistir la información en archivo json
        fs.writeFileSync('./PersonajesGOT.json', JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Ha ocurrido un error: ' + err);
    }
}


// 4. Funcion para leer archivo y parsear a json
export const leerArchivo = () => {

    //Validar que el archivo si existe
    return JSON.parse (fs.readFileSync('./PersonajesGOT.json', 'utf-8'));
}

// a) Funcion para mostrar por consola los personajes de la familia elegida
export function mostrarMiembrosFamilia (familia) {
    const personajes = leerArchivo();
    let familiaElegida = personajes.filter(personaje => personaje.family === familia );
    console.log(`\nPersonajes de la familia: ${familia}`);
    console.table(familiaElegida)
}


// b) Funcion para agregar nuevo personaje
export const agregarNuevoPersonaje = (nuevoPersonaje) => {

    const personajes = leerArchivo();   //aca recibo el archivo ya como array
    personajes.push (nuevoPersonaje);   //agrego nuevo objeto personaje

    fs.unlinkSync('./PersonajesGOT.json');  //Elimino el archivo .json
    fs.appendFileSync('./PersonajesGOT.json', JSON.stringify(personajes, null, 2)); //creo de nuevo el archivo
    
    const personajesActualizados = fs.readFileSync('./PersonajesGOT.json', 'utf-8');  //Leo el archivo nuevo
    const ArrObjPersonajes = JSON.parse(personajesActualizados)
    const personajesNombres = ArrObjPersonajes.map(personaje => `${personaje.id}: ${personaje.fullName}`)
    
    console.log(`\nAgregando nuevo personaje: ${nuevoPersonaje.fullName}`);
    console.log(personajesNombres);

}


// c) Funcion que elimina los personajes según id y sobreescribe el archivo original
export function eliminarPersonajesID (id) {
    const personajes = leerArchivo();
    let personajesFiltrados = personajes.filter(personaje => personaje.id <= id);

    fs.unlinkSync('./PersonajesGOT.json');  //Elimino el archivo .json
    fs.appendFileSync('./PersonajesGOT.json', JSON.stringify(personajesFiltrados, null, 2)); //creo de nuevo el archivo
    const nuevosPersonajes = fs.readFileSync('./PersonajesGOT.json', 'utf-8');  //Leo el archivo nuevo

    console.log('\nEliminando personajes con id >' + id)
    console.log(JSON.parse(nuevosPersonajes));
}