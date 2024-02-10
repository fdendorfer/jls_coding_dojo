export function solution(input) {
	return input.filter((num, index) => input.indexOf(num) === index && input.filter((n) => n === num).length % 2 !== 0)
}
