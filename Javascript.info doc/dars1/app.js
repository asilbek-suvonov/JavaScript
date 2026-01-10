// 1 = masala

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// 2= masala
// const twoSum = (nums, target) => {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     const needed = target - nums[i];

//     if (needed in map) {
//       return [map[needed], i];
//     }

//     map[nums[i]] = i;
//   }
// };
// console.log(twoSum([2, 7, 11, 15], 9));


// 3 = masala

// const countLetter = (str) => {
//   let arr = str.split("");
//   let countObj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] in countObj)) {
//       countObj[arr[i]] = 1;
//     } else {
//       countObj[arr[i]] += 1;
//     }
//   }

//   return countObj;
// };

// const result = countLetter("Hello");
// console.log(result);

// const countLetter = (str) => {
//   let arr = str.split("");
//   let countObj = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] in countObj)) {
//       countObj[arr[i]] = 1;
//     } else {
//       countObj[arr[i]] += 1;
//     }
//   }
//   return countObj;
// };

// const result = countLetter("Assalomu alaykum aziz opa singillar ");

// console.log(result);


