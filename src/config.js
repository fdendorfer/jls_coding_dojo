const args = process.argv.slice(2).reduce((acc, a) => {
	const [key, value] = a.split('=')
	const configKey = key
		.replace('--', '')
		.replace('-e', 'excersise')
		.replace('-i', 'iterations')
		.replace('-f', 'filter')
		.replace('-d', 'debugLogs')

	acc[configKey] = value
	return acc
}, {})

/**
 * Configures how to run the test suite
 * @type {import('./index.js').Config}
 */
const config = {
	excersise: 1,
	iterations: 10_000,
	filter: '',
	debugLogs: false,
}

export default { ...config, ...args }
