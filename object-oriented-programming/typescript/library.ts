/*
Se te proporcionarán varios libros, y tu tarea será realizar diversas operaciones con ellos: 
    -como agregar un libro,
    -buscar un libro por título y
    -listar todos los libros.

El objetivo es obtener un objeto que represente una biblioteca con métodos para gestionar los libros. 
Deberás definir un atributo para almacenar los libros y métodos para agregar, buscar y listar libros.

Dando la posibilidad de operar estos libros de 2 formas distintas, tanto con funciones aparte del objeto como 
incluidos como parte de su funcionalidad dentro del objeto mismo

*/
interface IBook {
    name: string
    author: string
    year: number
}


function Book(name: string, author: string, year:number): IBook {
        return {name, author, year}
}

const library = {
    books: [], 
    
    add: function (book: IBook) {
        this.books.push(book);
        console.log(`Agregando el libro ${book.name} de ${book.author}`)
    }

}


const book1 = Book('100 Años de Soledad', 'Gabriel Garcia Márquez', 1967)
const book2 = Book('Metamorfosis', 'Franz Kafka', 1915)
const book3 = Book('Numero Cero', 'Humberto Eco', 2015)




library.add(book1)
library.add(book2)
library.add(book3)

console.log (library.books)