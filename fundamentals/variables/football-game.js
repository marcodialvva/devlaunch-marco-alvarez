/*
El evento es parte de las Eliminatorias Sudamericanas para la Copa del Mundo.
En un partido celebrado el 22/11/23 a las 20:30, el equipo local Argentina 
se enfrentó al equipo visitante Brasil. El resultado final fue 1-0, 
indicando a Argentina como el equipo ganador.
*/

const evetName = "Eliminatorias Sudamericanas"

const day = 22
const month = 11
const year = 2023

const date = `${day}/${month}/${year}`

const hour = 20
const minutes = 30

const time = `${hour}:${minutes}`

const formatHour = hour - 12
const formatTime = `${formatHour}:${minutes}PM`

const localTeam = "Argentina"
const awayTeam = "Brasil"

const localScoreTeam = 1
const awayScoreTeam = 0

const score = `${localScoreTeam}-${awayScoreTeam}`


console.log(evetName)
console.log(time)
console.log(localTeam, awayTeam)
console.log(score)

console.log (`
    Torneo: ${evetName} - ${time}\n
    Equipos: ${localTeam} vs ${awayTeam}\n
    Resultado: ${localScoreTeam} vs ${awayScoreTeam}\n
`)