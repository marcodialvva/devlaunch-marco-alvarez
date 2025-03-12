

const dnaString2 = 'gtgggggtttatgectttagaacagcag'
const sequences = 'tgect'

function isADnaMatch (dnaString2: string, sequence: string ): void {

    const isAMatch1 = dnaString2.includes(sequences)

    if (isAMatch1 === true) {
        console.log (`POSITIVE: ${sequences} is present in the DNA STRING ${dnaString2}`)

    } else {
        console.log ('No match found')
    }

}

const dnaResult = isADnaMatch (dnaString2, sequences)

console.log(dnaResult)