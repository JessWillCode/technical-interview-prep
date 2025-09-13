/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let pocket = {};
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(pocket[diff] !== undefined){
            return [i, pocket[diff]];
        }
        pocket[nums[i]] = i
    }
};

//at least 2 numbers in array, less than or equal to 10000
//only one valid answer

//Understand
    //returning indices of the numbers that add up to the target
    //2 for loop through nums - first one is looking at the curr index(start at 0), second one is looking at the next index (start at 1)
    //if nums[i] + num[j] = target, return [i, j]
    //should not use the same element twice

//Plan
//looking at 2 things at the same time without 2 loops

//map - mapping value of arr[index] to index
//target - index = result
//if mapo[result] exists - push it into result array
//Execute

//Reflect

//--------------------------------------------------------------------------------------
//TYPESCRIPT
// function twoSum(nums: number[], target: number): number[] {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 1; j < nums.length; j++){
//                 if(nums[i] + nums[j] === target && i !== j){
//                     return [i, j];
//                 }
//         }
//     }
// };