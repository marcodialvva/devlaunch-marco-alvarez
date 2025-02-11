/*

Sistema de Gestión de Eventos
Descripción: Crea un sistema para gestionar eventos que permita agregar eventos, registrar asistentes, cancelar registros y buscar eventos por tipo.

Requisitos:

Crea una función EventManager que genere un objeto de gestión de eventos.
El gestor de eventos debe tener un array de eventos.
Cada evento debe tener un identificador único, nombre, tipo, fecha y un array de asistentes.
Métodos:
addEvent(id, name, type, date): Agrega un nuevo evento.
registerAttendee(eventId, attendeeName): Registra a un asistente en un evento si hay espacio.
cancelRegistration(eventId, attendeeName): Cancela el registro de un asistente en un evento.
searchEventsByType(type): Busca eventos por tipo y devuelve los resultados.

*/