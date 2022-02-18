var sortArray = function(nums) {
  if (nums.length < 1) return nums
  let midIndex = Math.floor(nums.length / 2)
  let mid = nums.splice(midIndex, 1)[0];
  let left = [], right = []
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] < mid) {
          left.push(nums[i])
      }else{
          right.push(nums[i])
      }
  }
  return sortArray(left).concat([mid], sortArray(right))
};