/*

Problem:
Given a sum of money, compute the minimum number of bills and coins that equal that sum.
Assume you only have the following denominations:
Bills: [20, 10, 5, 1]
Coins: [0.25, 0.1, 0.05, 0.01)

* Example:
* Input: 6.36

* Output:

* - One 5: 1

* - One 1: 1

* - One 0.25: 1

* - One 0.1: 1

* - One 0.01: 1

*/

function defineBillsAndCoins(amount: number) {


    const bills: number[] = [20, 10, 5, 1]
    const coins: number[] = [0.25, 0.1, 0.05, 0.01]

    const denominations: number[] = [...bills, ...coins].sort((a, b) => b - a)
    const result: { [key: number]: number } = {}

    amount = Math.round(amount * 100)

    for (const den of denominations) {
        const denInCents = Math.round(den * 100)
        while (amount >= denInCents) {
            if (!result[den]) {
                result[den] = 0;
            }
            result[den]++;
            amount -= denInCents;
        }
    }

    return result
}

console.log(defineBillsAndCoins(100.08))