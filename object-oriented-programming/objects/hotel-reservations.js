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


function hotel() {

    const rooms = []

    return {

        addRoom(id, type, pricePerNight, state = 'Available') {
            const room = {
                id,
                type,
                pricePerNight,
                state
            }
            rooms.push(room)
            return console.log (`Added room ${id}`)

        },

        bookRoom(id, guestName) {
            const bookedRoom = rooms.find(emp => emp.id === id)
            if (bookedRoom && bookedRoom.state === 'Available') {
                bookedRoom.state = ` Booked for ${guestName}`
            } return console.log (`Room ${id} is booked for ${guestName}` )

        },

        cancelBooking(id) {
            const room = rooms.find(emp => emp.id === id)
            if (room && room.state !== 'Available' || room.state !== guestName) {
                state = 'Available'
            } return console.log(`Book for Room ${id} has been cancel `)

        },

        searchAvailableRooms(query) {
            return console.log (rooms.filter(emp =>
                emp.type.includes(query)))
        },


        showAllRooms (){
            console.log (rooms)
        }



    }   


}

myHotel = hotel ()

myHotel.addRoom(101,'Suite', 500)
myHotel.addRoom(202,'Double', 300)
myHotel.addRoom(303,'Individual', 200)
myHotel.bookRoom(101, 'Marco Alvarez')
myHotel.bookRoom(202, 'Marco Alvarez')
myHotel.cancelBooking(101)
myHotel.searchAvailableRooms('Individual')
/*myHotel.showAllRooms()*/