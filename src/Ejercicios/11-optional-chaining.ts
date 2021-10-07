/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimirHijos(pasajero: Pasajero): void {
    /**
     * Con el ? podemos evaluar si el objecto que pasamos si contien la propiedad que se necesita
     * si no se coloca el || para indicar lo que se debe hacer
     */
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos)
}

imprimirHijos( pasajero1 );