/*

El objetivo es crear una clase Airport que modele las características y operaciones de un aeropuerto
de forma más avanzada.

Cada aeropuerto tiene :

Un nombre
Una ubicación
Una pista de aterrizaje (runway)
Un nivel de tráfico aéreo (bajo, medio, alto).

La clase debe incluir:


Un método changetrafficlevel que permita  el nivel de tráfico aéreo.
Un método emergency Landing que cierre la pista de aterrizaje y marque el nivel de tráfico como alto.
Un método displayinfo que muestre el nombre del aeropuerto, la ubicación y el estado actual de la
pista y el nivel de tráfico.
Crea una instancia de la Clase Airport y demuestra el uso de estos métodos con dist


*/

type AirTrafficLevel = 'Low' | 'Mid' | 'High'
type Runway = 'OPEN' | 'CLOSE'


class Airport {
  constructor(public name: string, public location: string, private runway: Runway, private airTrafficLevel: AirTrafficLevel) {
    this.name = name
    this.location = location
    this.runway = runway
    this.airTrafficLevel = airTrafficLevel
  }

  get TrafficLevel() {
    return this.airTrafficLevel
  }

  set TrafficLevel(airTrafficLevel: AirTrafficLevel) {
    this.airTrafficLevel = airTrafficLevel
  }


  get emergencyLanding() {
    return this.runway

  }
  set emergencyLanding(runway: Runway) {
    this.runway = runway
    this.airTrafficLevel = 'High'
  }


  get changeRunwayStatus() {
    return this.runway

  }
  set changeRunwayStatus(newStatus: Runway) {
    this.runway = newStatus
  }


  changeTrafficLevel (airTrafficLevel: AirTrafficLevel):void {

    this.airTrafficLevel = airTrafficLevel
    console.log (`The air traffic level is ${airTrafficLevel}`)
  }

  _emergencyLanding ():void {

    this.runway = 'CLOSE'
    this.airTrafficLevel = 'High'
    console.log (`Emergency landing in ${this.name}. The runway is ${this.runway}`)

  }


  displayInfo() {
   console.log(`${this.name} is located in ${this.location}. Runway status: ${this.runway}. Air traffic level: ${this.airTrafficLevel}.`)
}
  


}

const airP1 = new Airport('JFK', 'New York', 'OPEN', 'Mid')
/*

//Para los getter y setters
// Cambiar el nivel de tráfico aéreo
airP1.TrafficLevel = 'High';
console.log(airP1.displayInfo()); 

// Cambiar el estado de la pista
airP1.emergencyLanding = 'CLOSE';
console.log(airP1.displayInfo()); 
// Cambiar el estado de la pista usando el nuevo método
airP1.changeRunwayStatus = 'OPEN';
console.log(airP1.displayInfo()); 
*/
// Para los métodos


airP1._emergencyLanding()
airP1.changeTrafficLevel('Low')
airP1.displayInfo()


