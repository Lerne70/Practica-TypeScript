/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    // Así es como se defien un objecto que contiene información pero no es muy recomendable
    // direccion: {
    //     calle: string;
    //     pais: string;
    //     ciudad: string;
    // };
    direccion: Direccion;
    mostrarDireccion: () => string;
}

// Es más recomendable crear otra interfaz por cada objeto que se ncesite
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );