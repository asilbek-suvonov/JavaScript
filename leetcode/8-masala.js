var searchRange = function(nums, target) {
    return nums.findIndex(el => el === target) === -1 ? [-1, -1] : [nums.indexOf(target), nums.lastIndexOf(target)]
};


searchRange([5,7,7,8,8,10], 8)