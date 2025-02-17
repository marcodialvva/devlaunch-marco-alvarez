/*
Cuando se trata de ventiladores, a menudo presentan características distintivas como configuraciones de velocidad, tamaño,
intencia medida en vatios o caballes de fuerza, tipo y color.

Para manejar y modificar adecuadamente las características de un ventilador, es útil organizarlas en un sistema de clases. 
De esta manera, se obtiene una estructura clara para trabajar con las propiedades del ventilador,
facilitando la comprensión, reutilización y mantenimiento del código.

Para abordar esta tarea, crearemos una clase que encapsule los diferentes atributos de un ventilador. Esta clase incluirá un constructor para inicializar 
dichos atributos y métodos como getters y setter para acceder y modificarlos según sea necesario.

Al implementar esta estructura de clase, podremos representar y gestionar de manera eficiente las características de los ventiladores en nuestro sistema.

Esta clase esté diseñada para proporcionar todas las características esenciales del ventilador desde
el momento de su creación.

*/

type FanColor = 'black' | 'white' | 'gray'
type FanSize = 'Small' | 'Medium' | 'Large'
type FanSpeeds = 0 | 1 | 2 | 3 | 4
type FanType = 'Wall' | 'Car' | 'Roof' | 'Walk'
interface _Fan {
    speeds: FanSpeeds
    size: FanSize
    intensity: number
    type: FanType
    color: FanColor

}
class Fan {
    constructor(private _intensity: number, private _speeds: FanSpeeds, private _size: FanSize, private _type: FanType, private _color: FanColor) {

        this._intensity = _intensity
        this._speeds = 0
        this._size = _size
        this._type = _type
        this._color = _color
    }

    set intensity(intensity: number) {
        this._intensity = intensity
    }
    get intensity() {
        return this._intensity
    }

    set speeds(speeds: FanSpeeds) {
        this._speeds = speeds
    }
    get speeds() {
        return this._speeds
    }

    set type(type: FanType) {
        this._type = type
    }
    get type() {
        return this._type
    }

    set size(size: FanSize) {
        this._size = this.size
    }
    get size() {
        return this._size
    }

    set color(color: FanColor) {
        this._color = this._color
    }
    get color() {
        return this._color
    }


}

const fan1 = new Fan(8, 4, 'Medium', 'Roof', 'black')


// Evaluación
console.log(fan1.intensity); // 8
console.log(fan1.speeds); // 4
console.log(fan1.size); // 'Medium'
console.log(fan1.type); // 'Roof'
console.log(fan1.color); // 'black'

// Modificar valores
fan1.intensity = 10;
fan1.speeds = 2;
console.log(fan1.intensity); // 10
console.log(fan1.speeds); // 2