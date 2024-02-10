export function solution(input) {
	const oddEl = input.reduce((acc, el) => {
		if (!acc.has(el)) {
			acc.add(el)
		} else {
			acc.delete(el)
		}
		return acc
	}, new Set())
	return Array.from(oddEl.values())
}
