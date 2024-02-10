export function solution(input) {
	const integerIsOdd = {}
	/*
	 integerIsOdd = {
			1: true
			2: false
			3: false
	 }
	 */
	input.forEach((integer) => {
		if (integerIsOdd[integer]) {
			integerIsOdd[integer] = !integerIsOdd[integer]
		} else {
			integerIsOdd[integer] = true
		}
		return true
	})

	const filteredArray = []
	Object.entries(integerIsOdd).forEach(([integer, isOdd]) => {
		if (isOdd === true) {
			filteredArray.push(Number(integer))
		}
	})

	return filteredArray
}
