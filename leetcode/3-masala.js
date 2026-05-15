var findMin = function (nums) {
  let min = nums[0];
  for (let a = 0; a < nums.length; a++) {
    const element = nums[a];
    if (nums[a] < min) {
      min = nums[a];
    }
  }
  return min;
};

findMin([4, 5, 6, 7, 0, 1, 2]);
