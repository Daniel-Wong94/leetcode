/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
      let current = nums[i];
      for(let j = i + 1; j < nums.length; j++){
          if (current === nums[j]){
            nums.splice(j, 1);
            j--;
          } else {
              break;
          }
      }
    }
    return nums.length;
};
