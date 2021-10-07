/*
    ===== Código de TypeScript =====
*/
/**
 * Para indicar que la funcion es generica se utiliza por estandar
 * <T> asi cada argumento que se reciba tendra su propio tipo
 * @param argumento 
 * @returns 
 */
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9] );

let soyExplicito = queTipoSoy<number>( 200 );
