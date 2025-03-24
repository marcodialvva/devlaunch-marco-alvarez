/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.
Example 1:
Input: nums = [1,1,0,1,1,1]

Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
The maximum number of consecutive: 1s is 3.
Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2
*/

const maxConsecutiveNumber = (numbs: number[]): number => {
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < numbs.length; i++) {
        if (numbs[i] === 1) {
            count = 0; 
            while (i < numbs.length && numbs[i] === 1) {
                count++;
                i++; 
            }
            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
};

const numbs = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1];
const numbs2 = [1, 0, 1, 1, 0, 1];

console.log(maxConsecutiveNumber(numbs)); 
console.log(maxConsecutiveNumber(numbs2)); 