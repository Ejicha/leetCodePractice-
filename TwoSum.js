/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let x = {};
    
    for (let i = 0; i < nums.length; i++){
        if(target - nums[i] in x){
           return [x[target-nums[i]], i];
                   }
        else{
            x[nums[i]] = i;
        }
    }
    return [];
};
