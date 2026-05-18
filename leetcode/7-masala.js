var minJumps = function (arr) {
  let n = arr.length;
  if (n === 1) {
    return 0;
  }
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }
    map.get(arr[i]).push(i);
  }

  let queue = [0];
  let visited = new Array(n).fill(false);
  visited[0] = true;

  let steps = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let i = queue.shift();

      if (i === n - 1) return steps;

      let neighbors = [];

      if (i - 1 >= 0) neighbors.push(i - 1);

      if (i + 1 < n) neighbors.push(i + 1);

      if (map.has(arr[i])) {
        neighbors.push(...map.get(arr[i]));
      }

      for (let next of neighbors) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }

      map.delete(arr[i]);
    }

    steps++;
  }

  return -1;
};

console.log(minJumps([7, 6, 9, 6, 9, 6, 9, 7]));
