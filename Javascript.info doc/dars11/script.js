// 1 chi masala
var reverse = function (x) {
  let result = 0;
  while (x !== 0) {
    let digit = x % 10;
    x = Math.trunc(x / 10);

    result = result * 10 + digit;
  }
  return result;
};

// console.log(reverse(123));

// 2 chi masala

function reverseNumber(x) {
  let result = 0;

  while (x > 0) {
    let digits = x % 10;
    result = result * 10 + digits;
    x = Math.trunc(x / 10);
  }

  return result;
}

function isPalendrome(x) {
  if (x < 0) return false;
  return x === reverseNumber(x);
}

const res = isPalendrome(121);
console.log(res);
