const message = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'

/**
 * En el mundo del espionaje, se utiliza un lenguaje de codificación con símbolos que realizan operaciones matemáticas simples.
 * Tu tarea es crear un mini compilador que interprete y ejecute programas escritos en este lenguaje de símbolos.
 * Las operaciones del lenguaje son las siguientes:
 * "#" Incrementa el valor numérico en 1.
 * "@" Decremento el valor numérico en 1.
 * "*" Multiplica el valor numérico por sí mismo.
 * "&" Imprime el valor numérico actual.
 * El valor numérico inicial es 0 y las operaciones deben aplicarse en el orden en que aparecen en la cadena de símbolos.
 */
let count = 0
let result = ''

for (const element of message) {
    switch (element) {
        case '#':
            count ++
            break;
        case '@':
            count --
            break;
        case '*':
            count *= count            
            break;
        case '&':
            result += `${count}`            
            break;

        default:
            break;
    }
}
console.log(result)

