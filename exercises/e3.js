import { data } from "../data/data";

// SPACE DATA EXERCISE 3
// Return an array of all Planets' average temperatures
// Return example: [1, 2, ... , N]

export function getAllAverageTemperatures(data) {
  const avgTemp = data.planets.map(temp => temp.avgTemp);
  return avgTemp;
}

//I literally spent like 20 minutes on this dang question because I was getting the array of avergeTemp and then getting the array from map to then .reduce and divide by the number of planets. I assumed you wanted one single answer until I went back and really reread the question. lol

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
