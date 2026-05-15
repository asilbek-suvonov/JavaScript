// leecode masalalar yechish

sumArray([1, 2, 3, 4, 5]); // → 15
sumArray([10, 20, 30]); // → 60
sumArray([5]); // → 5
sumArray([]); // → 0

function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    total += element;
  }
  return total;
}

