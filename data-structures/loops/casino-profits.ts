/*
casino-profits.ts
En un casino en Línea han implementado un nuevo juego, que consiste en lanzar tres dados y anotar sus valores.
Si la suma de estos valores es mayor o igual a 10, el apostador gana $10; de lo contrario, pierde $15.

Para probar el programa a fondo, simularás 50 intentos de personas jugando, cada jugador simula un intento.

Después de que todos los jugadores hayan terminado sus intentos, encuentra el resultado 
de las ganancias del casino empezando de 0.

El resultado puede ser tanto positivo como negativo, donde negativo representa que el casino perdió dinero, 
ya que los jugadores ganaron más dinero del que perdieron.

Si pruebas varias veces el código puedes topar con diferentes resultados como:

100, 150, -50, -25, 75

Pero mayormente dara números positivos que negativos en ganancias, porque recuerda
"la casa (casino) nunca pierde..."

*/
interface Balance {
    casino:number
    gambler:number
    total:number
}

function playerShots() {
    let total = 0

    for (let i = 0; i < 4; i++) {
        const shot: number = Math.floor(Math.random() * 6) + 1
        total+=shot
    }

    return total
}

function player() {
    const shots: Balance = {
        casino:0,
        gambler:0,
        total: 0
    }

    for (let i = 1; i <= 50 ; i++) {
        let turn = playerShots()
        if (turn < 10) {
            shots.casino+=15
            shots.total+=15
        } else {
            shots.gambler+=10
            shots.total-=10
        }
      //  console.log (`Iteración ${i}`, shots)
    }
    return shots
}

console.log(player())


