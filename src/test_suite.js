export function runTests(testCases, lineup, iterations = 1) {
	// Runs the tests
	for (let i = 0; i < iterations; i++) {
		for (const contestant of lineup) {
			if (contestant.hasFailed) continue
			const start = performance.now()
			for (const testCase of testCases) {
				const output = contestant.solution(testCase.input)
				// Check if output matches expected result
				if (!output.sort().every((value, index) => value === testCase.expectedResult[index])) {
					contestant.hasFailed = true
					const testCaseShortString =
						testCase.input.toString().length > 15
							? testCase.input.toString().slice(0, 15) + '...'
							: testCase.input.toString()
					console.debug(
						`Contestant: ${contestant.name}, has failed on test case: [${testCaseShortString}], with actual output: [${output}] and expected output: [${testCase.expectedResult}]`,
					)
					break
				}
			}
			const end = performance.now()
			contestant.runs.push(end - start)
		}
	}

	// Show results
	for (const contestant of lineup) {
		if (contestant.hasFailed) console.log(`Contestant ${contestant.name} has failed, sry :)`)
		else
			console.log(
				`Contestant ${contestant.name}'s solution runs at an average time of ${
					contestant.runs.reduce((acc, curr) => acc + curr, 0) / contestant.runs.length
				}ms`,
			)
	}
}
