import fs from 'fs'
import { runTests } from './test_suite.js'
import config from './config.js'

// config
if (!config.debugLogs) console.debug = () => {}

// find all excersises
const excersises = {}
const excersisesFiles = fs.readdirSync('./src/excersises')
for (const excersiseFile of excersisesFiles) {
	const excersiseNumber = excersiseFile.match(/excersise_(\d+).js/)?.[1]
	if (excersiseNumber) {
		excersises[excersiseNumber] = {
			testCases: (await import(`./excersises/${excersiseFile}`)).testCases,
			lineup: [],
		}
	}
}

// find all people with a solution
let contestants = fs.readdirSync('./src/solutions')
if (config.filter) contestants = contestants.filter((c) => config.filter.includes(c))

// find all solutions for each excersise
for (const [key, value] of Object.entries(excersises)) {
	// find all contestants that have a solution for this excersise
	for (const contestant of contestants) {
		const solutionFilePath = `./solutions/${contestant}/excersise_${key}.js`

		// if the contestant has a solution for this excersise, add it to the lineup
		if (fs.existsSync('src/' + solutionFilePath)) {
			value.lineup.push({
				name: contestant,
				solution: (await import(solutionFilePath)).solution,
				runs: [],
				hasFailed: false,
			})
		}
	}
}

console.log(`Results for excersise ${config.excersise} at ${config.iterations.toLocaleString('de-CH')} iterations:`)
runTests(excersises[config.excersise].testCases, excersises[config.excersise].lineup, config.iterations)
