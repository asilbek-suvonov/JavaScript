var longestCommonPrefix = function (arr1, arr2) {
  const prefex = new Set();
  for (let val of arr1) {
    while (val > 0) {
      prefex.add(val);
      val = Math.floor(val / 10);
    }
  }

  let maxLength = 0;

  for (let val of arr2) {
    while (val > 0) {
      if (prefex.has(val)) {
        const currentLength = val.toString().length;

        if (currentLength > maxLength) {
          maxLength = currentLength;
        }
        break
      }
      val=Math.floor(val / 10);
    }
  }
    return maxLength;
};
