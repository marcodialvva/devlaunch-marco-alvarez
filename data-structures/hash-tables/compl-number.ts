const numbers = [2, 8, 4, 1, 3, 5]
const target = 13

function findPairSum(numbers: number[], target: number): [number, number] | null {
    const hash: Record<number, number> = {}

    for (let i = 0; i < numbers.length; i++) {
        const n = numbers[i]
        if (hash[n]) {
            return [hash[n], n]
        }
        hash[target - n] = n
    }
    return null

}

console.log(findPairSum(numbers, target))
