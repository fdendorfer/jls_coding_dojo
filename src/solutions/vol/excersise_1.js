export function solution(input) {
	const counts = {}
	for (const num of input) {
		counts[num] = counts[num] ? counts[num] + 1 : 1
	}

	return Object.entries(counts)
		.filter(([_, value]) => Number(value) % 2)
		.map(([key, _]) => Number(key))
}
