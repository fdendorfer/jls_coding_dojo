export function solution(input) {
	const combinations = new Set()

	function findCombinationsUtil(arr, index, num, reducedNum) {
		if (reducedNum < 0) return
		if (reducedNum === 0) {
			const combination = arr.slice(0, index)
			combinations.add(combination)
			return
		}
		let prev = index === 0 ? 1 : arr[index - 1]
		for (let k = prev; k <= num; k++) {
			arr[index] = k
			findCombinationsUtil(arr, index + 1, num, reducedNum - k)
		}
	}
	findCombinationsUtil([], 0, input, input)

	const partitionsGroupedByProduct = Object.groupBy(combinations, (item) => item.reduce((acc, curr) => acc * curr, 1))

	const biggestIndex = Math.max(...Object.keys(partitionsGroupedByProduct))
	const output = [...partitionsGroupedByProduct[biggestIndex], parseInt(biggestIndex)]

	return output
}
