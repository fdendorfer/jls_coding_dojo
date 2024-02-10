# Coding Dojo

This is a repository for coding dojo excersises. The main goal is to practice
problem solving and coding skills. Solutions can focus on a certain metric like
efficiency, compactness, creativitiy, etc.

## How to use

1. Clone the repository
2. Add your solution to the `src/solutions/contestant` folder
3. Run the main file with `node src/main.js`. Optionally you can add parameters
to adjust the run configuration (e.g. `node main.js --iterations=100 --filter=def,nes`)

## Folder structure

```text
docs/
  excersise_1.md > description of the excersise + results
  ...
src/
  config.js > configuration for the test suite
  index.d.ts > typescript/jsdoc types
  main.js > decides what excersise to run and how many iterations to run
  test_suite.js > runs the test cases for a given excersise
  excersises/
    excersise_1.js > exports a an array of test cases
    ...
  solutions/
    contestant/
      excersise_1.js > exports a function solution(input)
      excersise_1.md > explanation of the solution
    .../...
```

## How the test suite works

```text
for each iteration        check if contestant has failed already
  for each contestant     start timer here
    for each test case
      test the solution   compare the result with the expected result
```
