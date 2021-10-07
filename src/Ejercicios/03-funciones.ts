/*
    ===== Código de TypeScript =====
*/

/**
 * Una función normal, pude ser escrita esoecificando
 * el tipo de parametros a recibir y el tipo de retorno
 * @param a 
 * @param b 
 * @returns 
 */
function sumar(a:number, b:number):number {
    return a + b;
}

/**
 * La función de flecha hace lo mismo que la función normal
 * @param a 
 * @param b 
 * @returns 
 */
const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

/**
 * En esta funcón a persar de que el segundo parametros 
 * es opcional, se debe tener cuidado porque el siguiente parametros
 * no mostrara un error porque no se puede tener un parametro necesario
 * después de uno opcional, para resolver el error se le asigna un valor
 * @param numero 
 * @param otroNumero 
 * @param base 
 * @returns 
 */
function multiplicar(numero:number, otroNumero?:number, base:number = 2):number {
    return numero * base;
}

// const resultado = multiplicar(20, 0, 10);

// console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    // Esta la forma en la que se define una funcion dentro de la interfaz y se puede usar en el objecto
    mostrarHp:() => void;
}

function curar(personaje: PersonajeLOR, curarX: number):void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida ', this.pv);
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();