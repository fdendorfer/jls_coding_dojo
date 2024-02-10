export interface Config {
	/**
	 * Which excersise to run
	 * @default 1
	 */
	excersise: number
	/**
	 * How many times to run all tests per contestant
	 * @default 10_000
	 */
	iterations: number
	/**
	 * Filter out contestants that don't occur in this string. If empty, all contestants will be run
	 * @default ''
	 * @example 'def,nes' will only run the contestants 'def' and 'nes'
	 */
	filter: string
	/**
	 * Set this to true to see debug logs
	 * @default false
	 */
	debugLogs: boolean
}
