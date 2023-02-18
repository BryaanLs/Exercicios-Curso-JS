// const nums1 = [1, 2, 3];
// const nums2 = [4, 5, 6];
// const nums = nums1.concat(nums2, [7, 8, 9], 'Bryan');
// console.log(nums);

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums = [...nums1, ...nums2, 7, 8, 9]
console.log(nums);