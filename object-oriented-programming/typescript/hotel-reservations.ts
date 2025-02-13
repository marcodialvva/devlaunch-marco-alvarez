/*

Crea un sistema de reservas de hotel que permita agregar habitaciones, reservar habitaciones,
 cancelar reservas y buscar habitaciones disponibles por tipo. 
 Cada habitación debe tener un identificador único, tipo (individual, doble, suite), precio por noche y estado (disponible o reservada).

Requisitos:

Crea una función Hotel que genere un objeto de hotel.
El hotel debe tener un array de habitaciones.
Métodos:
addRoom(id, type, pricePerNight): Agrega una nueva habitación al hotel.
bookRoom(id, guestName): Reserva una habitación si está disponible.
cancelBooking(id): Cancela la reserva de una habitación.
searchAvailableRooms(type): Busca habitaciones disponibles por tipo y devuelve los resultados.


*/


interface Room {
    id: number, 
    typeRoom: string, 
    pricePerNight: number, 
    state: string
}

function hotel() {

    const rooms: Room[]=[]

    return {

        addRoom(id: number, typeRoom: string, pricePerNight: number, state: string = 'Available') {
            const room = {
                id,
                typeRoom,
                pricePerNight,
                state
            }
            rooms.push(room)
            return console.log (`Added room ${id}`)

        },

        bookRoom(id:number, guestName:string) {
            const bookedRoom = rooms.find(emp => emp.id === id)
            if (bookedRoom && bookedRoom.state === 'Available') {
                bookedRoom.state = ` Booked for ${guestName}`
            } return console.log (`Room ${id} is booked for ${guestName}` )

        },

        cancelBooking(id:number) {
            const room = rooms.find(emp => emp.id === id)
            if (room && room.state !== 'Available') {
                room.state = 'Available'
            } return console.log(`Book for Room ${id} has been cancel `)

        },

        searchAvailableRooms(query:string) {
            return console.log (rooms.filter(emp =>
                emp.typeRoom.includes(query)))
        },


        showAllRooms (){
            console.log (rooms)
        }



    }   


}

const myHotel = hotel ()

myHotel.addRoom(101,'Suite', 500)
myHotel.addRoom(202,'Double', 300)
myHotel.addRoom(303,'Individual', 200)
myHotel.bookRoom(101, 'Marco Alvarez')
myHotel.bookRoom(202, 'Marco Alvarez')
myHotel.cancelBooking(101)
myHotel.searchAvailableRooms('Individual')
/*myHotel.showAllRooms()*/