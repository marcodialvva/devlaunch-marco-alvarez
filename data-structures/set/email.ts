/*
Desarrolla una función que procese una lista de correos electrónicos y elimine cualquier duplicado para evitar que se envíen mensajes múltiples a la misma dirección.
La función debe devalver una lista de objetos, donde cada obleto contiene un cacreo electrónica único y un mensaje personalizado dirigido al destinatario.
Cada mensaje debe dirigirse al usuario según la primera parte de su carreo electrónico
(la sección antes del @).
Por ciemplo, si el correo es ana.smithegmail.com, el mensaje debería comenzar con "Hola Ana Smith".
Esta funcionalidad es útil en aplicaciones donde es necesarte enviar mensajes personalizados a una
Lista de contactos, asegurando que cada persona reciba solo un mensaje sin duplicados.


Lista de correos electrónicos:
'ana.smith@gmail.com'
'juan.perez@yahoo.com',
'maria.garcia@hotmail.com',
'ana.smith@gmail.com'
'carlos. lopez@gmail.com'
'mario.castro@hotmail.com',
'laura.martinez@outlook.com'

[

{email: ana.smith@gmail.com, message: "Hello Ana Smith. Thanks you for being part of our community"},
{ email: juan.perez@yahoo. com, message: "Hello Juan Perez. Thanks you for being part of our community"} 
{email: mario.castro@hotmail. com, message: "Hello Mario Castro. Thanks you for being part of our community"}
{email: carlos.lopez@gmail.com, message: "Hello Carlos Lopez. Thanks you for being part of our community"},
{email: laura.martinez@out look.com, message: "Hello Laura Martinez. Thanks you for being part of our community"},

]

*/


const emailBaseList = (emailDataBase: string[]) => {
    const emailSet = new Set(emailDataBase)
    const emailList: string[] = Array.from(emailSet)
    return emailList
}

const nameBaseList = (emailList: string[]) => {
    const nameList = emailList.map(mail => {
        const [fullname, domain] = mail.split('@');
        const [name, lastName] = fullname.split('.');
        
        return {
            email: mail,
            message: `Hello ${name.charAt(0).toUpperCase() + name.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}. Thank you for being part of our community.`
        };
    });
    return nameList; 
};


const emailList = [
    'ana.smith@gmail.com',
    'juan.perez@yahoo.com',
    'mario.castro@hotmail.com',
    'ana.smith@gmail.com',
    'carlos.lopez@gmail.com',
    'mario.castro@hotmail.com',
    'laura.martinez@outlook.com',
    'carlos.lopez@gmail.com',
    'juan.perez@yahoo.com',
]

const setEmail = emailBaseList(emailList)
const names = nameBaseList(setEmail)

console.log(names)