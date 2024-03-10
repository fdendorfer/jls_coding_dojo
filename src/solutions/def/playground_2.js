export function solutionPlayground(input) {
	const partitionsExpected = [[1, 1, 1, 1, 1], [1, 1, 1, 2], [1, 1, 3], [1, 2, 2], [1, 4], [2, 3], [5]]
	const combinations = new Set()

	// https://www.geeksforgeeks.org/find-all-combinations-that-adds-upto-given-number-2/
	// Step 1
	function findCombinationsUtil(arr, index, num, reducedNum) {
		// console.log('findCombinationsUtil', { arr, index, num, reducedNum })
		// Step 2
		if (reducedNum < 0) return
		// Step 3
		if (reducedNum === 0) {
			const combination = arr.slice(0, index)
			// console.log('combination', combination)
			combinations.add(combination)
			return
		}
		// Step 4
		let prev = index === 0 ? 1 : arr[index - 1]
		// Step 5
		for (let k = prev; k <= num; k++) {
			// Step 6a
			arr[index] = k
			// Step 6b
			findCombinationsUtil(arr, index + 1, num, reducedNum - k)
		}
	}
	// Use the above function to find all combinations
	findCombinationsUtil([], 0, input, input)

	console.log('partitions ok', JSON.stringify(partitionsExpected) === JSON.stringify(Array.from(combinations)))

	const partitionsGroupedByProductExpected = {
		1: [[1, 1, 1, 1, 1]],
		2: [[1, 1, 1, 2]],
		3: [[1, 1, 3]],
		4: [
			[1, 2, 2],
			[1, 4],
		],
		5: [[5]],
		6: [[2, 3]],
	}
	const partitionsGroupedByProduct = Object.groupBy(combinations, (item) => item.reduce((acc, curr) => acc * curr, 1))

	console.log(
		'partitionsGroupedByProduct ok',
		JSON.stringify(partitionsGroupedByProductExpected) === JSON.stringify(partitionsGroupedByProduct),
	)

	const expectedOutput = [[2, 3], 6]
	const biggestIndex = Math.max(...Object.keys(partitionsGroupedByProduct))
	const output = [...partitionsGroupedByProduct[biggestIndex], parseInt(biggestIndex)]

	console.log('output ok', JSON.stringify(expectedOutput) === JSON.stringify(output), output)

	return output
}
solutionPlayground(5)
solutionPlayground(8)
solutionPlayground(10)
solutionPlayground(27)
solutionPlayground(30)
solutionPlayground(50)
