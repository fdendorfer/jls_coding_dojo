export function solution(input) {
	return Object.entries(Object.groupBy(input, (item) => item))
		.filter((item) => item[1].length % 2 !== 0)
		.map((item) => +item[0])
}
