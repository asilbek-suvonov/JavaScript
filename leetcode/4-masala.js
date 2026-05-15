var nextPermutation = function (nums) {
  let i = nums.length - 2; //2 chi elementda boshlab tekshiradi
  while (i >= 0 && nums[i] >= nums[i + 1]) { 
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let start = i + 1;
  let end = nums.length - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  } 
};

nextPermutation([2, 3, 4]);
