function smallestNum(...nums){
    nums.sort((a, b) => a-b);
    console.log(nums[0]);
}
smallestNum(-8, 2, -46);