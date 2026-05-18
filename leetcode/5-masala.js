var findMin = function(nums) {
    let min=0

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (nums[min] > element) {
            min = i;
        }
    }
    return nums[min];
};

findMin([4,5,6,7,0,1,2])