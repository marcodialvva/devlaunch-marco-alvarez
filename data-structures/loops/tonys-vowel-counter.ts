interface _VowelCount {
    [key:string]:number
}

const isVowel = (letter:string):boolean =>{
    return (
        letter === 'a'||
        letter === 'e'||
        letter === 'i'||
        letter === 'o'||
        letter === 'u'
    )
}

const _countVowel = (input:string):_VowelCount => {
    const vowelCount: _VowelCount = {
        a:0,
        e:0,
        i:0,
        o:0,
        u:0,
        total:0
    }
   for (let i=0; i <input.length; i++ ) {
    const letter = input.toLowerCase()[i]
    if (isVowel(letter)) {
        vowelCount[letter]+=1
        vowelCount.total+=1
    }
   }

    return vowelCount

}

console.log (_countVowel('Hello World'))