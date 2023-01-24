import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids;
  const arrayOfYears = asteroids.map((rock) => rock.discoveryYear);

  let frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequent;

  for (let i = 0; i < arrayOfYears.length; i++) {
    let year = arrayOfYears[i];
    if (frequencyMap[year]) {
      frequencyMap[year]++;
    } else {
      frequencyMap[year] = 1;
    }
  }

  for (let year in frequencyMap) {
    if (frequencyMap[year] > maxFrequency) {
      maxFrequency = frequencyMap[year];
      mostFrequent = year;
    }
  }

  return Number(mostFrequent);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
