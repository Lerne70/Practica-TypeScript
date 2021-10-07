/*
    ===== Código de TypeScript =====
*/

let habilidades:string[] = ['Bash', 'Counter', 'Healing'];

/**
 * El ? indica que puede ser opcional
 * así evitamos que en el objetcto persona
 * salte un error porque no se le incluye el 
 * campo puebloNatal.
 * 
 * Las intergfaces no aparecen en la devtool
 * porque solo se muestra codigo de JavaScript
 */
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[]
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Headling']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );
