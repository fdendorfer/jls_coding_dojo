export function solution(input) {
	const map = {}
	const result = []
	// Loop through the input array once and store the frequency of each element in a map
	for (const num of input) {
		map[num] = (map[num] || 0) + 1
	}

	// Loop through the map and push the keys with odd values to the result array
	for (const [key, value] of Object.entries(map)) {
		if (value % 2 === 1) result.push(Number(key))
	}

	return result
}
