# Find the Partition with Maximum Product Value

You are given an integer `n`, `n > 0`. You have to search the partition or partitions
of `n`, with maximum product value.

Let’s see the case for `n = 8`.

```text
Partition                 Product
[8]                          8
[7, 1]                       7
[6, 2]                      12
[6, 1, 1]                    6
[5, 3]                      15
[5, 2, 1]                   10
[5, 1, 1, 1]                 5
[4, 4]                      16
[4, 3, 1]                   12
[4, 2, 2]                   16
[4, 2, 1, 1]                 8
[4, 1, 1, 1, 1]              4
[3, 3, 2]                   18   <---- partition with maximum product value
[3, 3, 1, 1]                 9
[3, 2, 2, 1]                12
[3, 2, 1, 1, 1]              6
[3, 1, 1, 1, 1, 1]           3
[2, 2, 2, 2]                16
[2, 2, 2, 1, 1]              8
[2, 2, 1, 1, 1, 1]           4
[2, 1, 1, 1, 1, 1, 1]        2
[1, 1, 1, 1, 1, 1, 1, 1]     1
```

So our needed function will work in that way: If there is only one partition with
maximum product value, it will return a list of two elements, the unique partition
and the product value.

```text
Example (input -> output)

8 -> [[3, 3, 2], 18]
```

If there are more than one partition with maximum product value, the function
should output the partitions in a length sorted way.

```text
Example (input -> output)

10 -> [[4, 3, 3], [3, 3, 2, 2], 36]
```

Have fun!

Reference: [Find the Partition with Maximum Product Value](https://www.codewars.com/kata/5716a4c2794d305f4900156b)

## Timing Results

Winner is marked with __bold__ font.

| Method | Time |
| - | - |
|||
