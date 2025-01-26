/*
El programa solicita al usuario su edad con prompt-sync, la convierte a número y utiliza if-else para clasificar:
0 - 2 años: "You are a baby".
3 a 13 años: "You are a child".
14 a 17 años: "You are a teenager"
18 a 29 años: "You are a young adult".
30 a 60 años: "You are an adult".
Más de 60 años: "You are an elderly".
Si la edad es menor de 0, muestra: " The institution does not support your age, please try again"

*/

const prompt = require (`prompt-sync`)()
const age = parseFloat(prompt (`How old are you:`))

if ( age >= 60) {
    console.log("You are an elderly")
} else if (age >= 30){
    console.log("You are an adult")
}else if (age >= 18){
    console.log("You are a young adult")
}else if (age >= 14){
    console.log("You are a teenager")
}else if (age >= 2){
    console.log("You are a child")
}else if (age >= 0){
    console.log("You are a baby")
} else {
    console.log (" The institution does not support your age, please try again")
}

