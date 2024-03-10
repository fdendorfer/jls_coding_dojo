export const testCases = [
	{ input: 5, expectedResult: [[2, 3], 6] },
	{ input: 8, expectedResult: [[3, 3, 2], 18] },
	{ input: 10, expectedResult: [[4, 3, 3], [3, 3, 2, 2], 36] }, // 4*3^2, 3^2*2^2
	{ input: 27, expectedResult: [[3, 3, 3, 3, 3, 3, 3, 3, 3], 19683] }, // 3^9
	{ input: 30, expectedResult: [[3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 59049] }, // 3^10
]
