# Example Excersise 2

```js
const input = 8

const partitions = [
  [8],
  [7, 1],
  [6, 2],
  [5, 3],
  [4, 4],
  [6, 1, 1],
  [5, 2, 1],
  [4, 2, 2],
  [3, 3, 2],
  [5, 1, 1, 1],
  [4, 2, 1, 1],
  [3, 2, 2, 1],
  [2, 2, 2, 2],
  [2, 2, 2, 1, 1],
  [2, 2, 1, 1, 1, 1],
  [2, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
]

const partitionsGroupedByProduct = {
  1: [[1, 1, 1, 1, 1, 1, 1, 1]],
  // ...
  16: [
    [4, 4],
    [4, 2, 2],
    [2, 2, 2, 2],
  ],
  // ...
  18: [[3, 3, 2]],
}

const partitionsWithBiggestProduct = [[3, 3, 2]]

const result = [[3, 3, 2], 18]
```

```js
const input = 5

const partitions = [
  [5],
  [4, 1],
  [3, 2],
  [3, 1, 1],
  [2, 2, 1],
  [2, 1, 1, 1],
  [1, 1, 1, 1, 1],
]

const partitionsGroupedByProduct = {
  1: [[1, 1, 1, 1, 1]],
  2: [[2, 1, 1, 1]],
  3: [[3, 1, 1]],
  4: [[2, 2], [4, 1]],
  5: [[5]],
  6: [[3, 2]],
}

const partitionsWithBiggestProduct = [[3, 2], 6]
```
