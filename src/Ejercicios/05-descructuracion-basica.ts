/*
    ===== Código de TypeScript =====
*/

interface Repoductor  {
    volumnen: number;
    segundo: number;
    cancion: string;
    daetalle: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Repoductor = {
    volumnen: 90,
    segundo: 36,
    cancion: 'Mess',
    daetalle: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}
// const { volumnen, segundo, cancion, daetalle:{ autor:autorDetalle } } = reproductor;
/**
 * Destructuración de los objetos
 * En el lado derecho del = se coloca el objeto
 * en el lado izquierdo las constantes que vamos a utilizar y que contiene el objecto
 * para destructurar un objeto anidado se coloca el objeto dentro del que lo contiene 
 * y después se desctrucura en el siguiente linea siguiendo la forma de que a la derecha el objecto y a la izquierda la constante
 */
const { volumnen, segundo, cancion, daetalle} = reproductor;
const { autor } = daetalle;

// console.log('El volumen acutal de: ', volumnen );
// console.log('El segundo acutal de: ', segundo);
// console.log('El cancion acutal de: ', cancion);
// console.log('El autor acutal de: ', autor);

/********************************************************* */

// Desctructuración de arreglos
/**
 * Lo importante en los arreglos es la posicion
 * segun el orden de las constantes que definamos en los []
 * va tomar el valor correspodiente.
 * Si solo se quiere un valor, se coloan , en la posición de los valores que no interesan y solo se coloca la constante en la
 * posicion del valor que queremos tomar
 */
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;

// console.log('Personaje 1: ', p1 );
// console.log('Personaje 2: ', p2 );
console.log('Personaje 3: ', p3 );
