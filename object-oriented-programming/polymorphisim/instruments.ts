
type InstrumentType = 'String' | 'Wind' | 'Percussion' | 'Keyboard'

abstract class Instrument {
    constructor(public type: InstrumentType) {
    }

    play() { }

}

class Guitar extends Instrument {
    constructor() {
        super('String')

    }

    play() {
        return `🎸twri twri twri...🎵🎶`
    }

}

class Flute extends Instrument {
    constructor() {
        super('Wind')
    }

    play() {
        return `🪈 to to to to ...🎶🎵`
    }
}

class Drums extends Instrument {
  constructor(){
    super('Percussion')
  }
    play(){
      return `🥁🥁 Boom boom boom...`
    }
}

class Artist {
    constructor() { }

    playInstrument(instrument: Instrument) {                  // ******
        instrument.play()
        return instrument.play()
    }
}

// const inst = new Instrument () ERROR: Cannot create an instance of an abstract class.

const guitar1 = new Guitar()
const flute1 = new Flute()
const drums1 = new Drums()

const artist1 = new Artist()



console.log (artist1.playInstrument(guitar1))
console.log (artist1.playInstrument(flute1))
console.log (artist1.playInstrument(drums1))

