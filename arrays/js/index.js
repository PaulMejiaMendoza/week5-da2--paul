//******************Construir mediante []:  **************************
//Ejercicio Crea un array de 3 enteros:

let wholeNumbers = [5, 10, 15];



//Ejercicio Crea un array de 3 strings:

let drinks = ['pepsi', 'fanta', 'sprite'];



//Ejercicio Crea un array con 2 enteros y un string:

let bmwSerie = [1 , 2 , 'active' ];



//*****************Construir mediante new:    ***************************
//Ejercicio Crea un array de 3 enteros:

let bigNumber = new Array(100, 200, 300);



//Ejercicio Crea un array de 3 strings:

let people = new Array('Juan', 'Pepito', 'Juanito');



//Ejercicio Crea un array con 2 enteros y un string:

let audiA = new Array(3, 4, 'sport');



//Ejercicio ¿ Qué diferencia hay entre :
//let e = [3] y let f = new Array(3) ?

/*RESPUESTA -->Que el primero esta usando un "metodo de Array literal", es decir,que al abrir
 y cerrar un corchete el interpretede js es capaz de inferir que se trata de un ARRAY creado
  y no necesita el "new" del array condensado. 
y en el 2do es un "Metodo de array condensado".*/



 //1. Ejercicio Transformar el array de números const numberArrays = [1, 2, 3, 4, 5]; multiplicando por 5 ( map )

 const numberArrays = [1, 2, 3, 4, 5];
 const multiplicar = numberArrays.map(function(elem){return  elem * 5});
 //o tambien
 const multiplicar = numberArrays.map(elem => elem * 5});




/*2.Ejercicio Buscar el primer elemento mayor que 4 en el siguiente array

const numberArrays = [1, 2, 3, 4, 5];*/

const numberArrays = [1, 2, 3, 4, 5]

const newArray = numberArrays.find (function(elem){ return elem > 4});

//o tambien
const newArray = numberArrays.find (elem => elem > 4});




 /*3. Ejercicio Buscar el primer elemento que empieze por eva en el array

const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];*/

const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];

const newArray = miArray.find(function(name){return });



/*4.Ejercicio Hacer el sumatorio de un array numérico ( reduce ):

const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];*/


const miArray = ['pepe', 2,'evaristo', 4, 'eva'];
let newArray = miArray.filter(elem => typeof elem === 'number').reduce((acc, cur) => acc + cur, 0);
console.log(newArray);




/*5. Ejercicio Contar el numero de elementos que son string en el siguiente array (reduce):

const miArray = ['pepe', 2, 'evaristo', 4, 'eva']; */



/*6. Ejercicio Modificar array usando push.

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas']; a

['Manzanas', 'Peras', 'Castañas', 'Nueces']*/


const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];

arrayOriginal.push('Nueces');



/*7. Ejercicio Modificar array usando concat.

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas']; a

['Manzanas', 'Peras', 'Castañas', 'Nueces'] */

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];

const miNuevoArray = arrayOriginal.concat(['Nueces']);




/*8. Ejercicio Modificar array usando splice.

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas']; a

['Manzanas', 'Peras', 'Nueces']*/

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas']

arrayOriginal.splice(2, 1);
arrayOriginal.push('Nueces');
 




/*9.Ejercicio Añadir elemento a un array usando splice

const arrayOriginal = ['Manzanas', 'Peras', 'Castañas']; a

['Manzanas', 'Peras', 'Castañas', 'Nueces'] . */


const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];

arrayOriginal.splice(3, 0,'Nueces');