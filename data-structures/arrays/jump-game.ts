
function jumpGame(nums: number[]): boolean {

    let i = 0

    while (typeof nums[i] === 'number'){
        if(i === nums.length-1) {return true}
        
        else if (nums[i] === 0){return false} 
        
        i+=nums[i]
    }

return false
}

console.log(jumpGame([2,2,1,1,1,0]))