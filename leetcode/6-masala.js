var canReach = function (arr, start) {
  let visited = new Array(arr.length).fill(false);

  function dfs(i) {
    if (i < 0 || i >= arr.length || visited[i]) {
      return false;
    }
    if (arr[i] === 0) {
      return true;
    }
    visited[i] = true;
    return dfs(i + arr[i]) || dfs(i - arr[i]);
  }
  return dfs(start);
};

console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));
