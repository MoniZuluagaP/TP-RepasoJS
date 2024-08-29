import {fetchAllProducts, fetchLimitedProducts, insertNewProduct, fetchProductById, deleteProductbyId} from "./FakeStore.js";

const cantProductos = 5;
const nuevoProd = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
};
const productoBuscado = 7;
const productoEliminado = 2;

function onlineProductsApi () {
    setTimeout(() => {
        fetchAllProducts ();
    }, 0);
    
    setTimeout(() => {
        fetchLimitedProducts (cantProductos);
    }, 2000);
    
    setTimeout(() => {
        insertNewProduct (nuevoProd);
    }, 4000);
    
    setTimeout(() => {
        fetchProductById (productoBuscado);
    }, 6000);
    
    setTimeout(() => {
        deleteProductbyId (productoEliminado);
    }, 8000);
}

onlineProductsApi ();