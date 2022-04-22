import Table from "./templates/tableTemplate.js";
import HttpMethods from "./templates/httpMethodsTemplate.js";

//Defino la ubicacion de la DB
const productsBd = './db/products.json';

//Creo la tabla con sus atributos
export const productsTable = new Table(productsBd);

//Creo el controlador con los metedos:
export const productsCtrl = new HttpMethods(productsTable);



