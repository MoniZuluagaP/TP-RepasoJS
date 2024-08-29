'use strict';

const urlApi = "https://fakestoreapi.com/";

// 1. Funcion para recuperar información de todos los productos
export async function fetchAllProducts () {
    
    try {
        const response = await fetch (`${urlApi}products`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log('\nTodos los productos');
        console.log(data);
    } catch (err) {
        console.error('Ha ocurrido un error: ' + err);
    }
}

// 2. Funcion para recuperar información de un número limitado de productos
export async function fetchLimitedProducts (cantProductos) {
    
    try {
        const response = await fetch (`${urlApi}products?limit=${cantProductos}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(`\nMostrando ${cantProductos} productos`);
        console.log(data);
    } catch (err) {
        console.error('Ha ocurrido un error: ' + err);
    }
}

// 3. Funcion para agregar un nuevo producto. Retorna el id del producto insertado
export async function insertNewProduct (productoNuevo) {
    
    try {
        const response = await fetch (`${urlApi}products`, {
            method: 'POST',
            body: JSON.stringify(productoNuevo)
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log('\nProducto nuevo agregado')
        console.log(data);
    } catch (err) {
        console.error('Ha ocurrido un error: ' + err);
    }
}

// 4. Funcion para retornar un producto según id
export async function fetchProductById (id) {
    
    try {
        const response = await fetch (`${urlApi}products/${id}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(`\nVer producto con id ${id} `);
        console.log(data);
    } catch (err) {
        console.error('Ha ocurrido un error: ' + err);
    }
}

// 5. Funcion para eliminar un producto por medio de su id

export async function deleteProductbyId (idEliminar) {
    
    try {
        const response = await fetch (`${urlApi}products/${idEliminar}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(`\nProducto eliminado con id ${idEliminar}`)
        console.log(data);
    } catch (err) {
        console.error('Ha ocurrido un error: ' + err);
    }
}