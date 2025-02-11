/*

Sistema de Gestión de Inventario
Descripción: Crea un sistema para gestionar el inventario de una tienda que permita agregar productos, vender productos, restockear productos y buscar productos disponibles por categoría.

Requisitos:

Crea una función Store que genere un objeto de tienda.
La tienda debe tener un array de productos.
Cada producto debe tener un identificador único, nombre, categoría, precio y cantidad disponible.
Métodos:
addProduct(id, name, category, price, quantity): Agrega un nuevo producto a la tienda.
sellProduct(id, quantity): Vende un producto si hay suficiente cantidad disponible.
restockProduct(id, quantity): Añade más cantidad a un producto existente.
searchAvailableProducts(category): Busca productos disponibles por categoría y devuelve los resultados.


*/