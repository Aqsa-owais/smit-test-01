// Q1 fix te arrow function
// the follwing arrow function throw an error . fix it

const add = (a, b) => {
  return a + b;
};
console.log(add(3,5));

// Q2 write a fuction greetuser that takes name and timeofday as inputs and return a message

function greetUser(name, timeOfDay) {
  if (timeOfDay === "morning") {
    return `Good morning, ${name}!`;
  } else if (timeOfDay === "afternoon") {
    return `Good afternoon, ${name}!`;
  } else if (timeOfDay === "evening") {
    return `Good evening, ${name}!`;
  } else {
    return "Invalid time of day!";
  }
}

console.log(greetUser("John", "afternoon")); // Output: Good afternoon, John!

// Q3 . Variable Scoping and Closure
// Write a function `createCounter` that creates a closure and allows a user to increment or reset a
// counter. Example:
// const counter = createCounter();
// counter.increment(); // 1

// counter.increment(); // 2
// counter.reset(); // 0

const createCounter = () => {
  let count = 0;
  return {
    increment() {
      count++;
      console.log(count);
    },
    reset() {
      count = 0;
      console.log(count);
    },
  };
};
const counter = createCounter();
counter.increment();
counter.increment();
counter.reset();

//   Q4 . Template Literals
//   Write a function `greetUser` that takes `name` and `timeOfDay` as inputs and returns a message
//   like:
//   Good Morning, Alice!

function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}

console.log(greetUser("Alice", "Morning")); // Output: Good Morning, Alice!

// Q5 Destructuring and Default Parameters
// Given the following object:
// const user = { name: 'John', age: 25, city: 'New York' };
// Write a function that extracts `name` and `city` with default parameters and logs the following:
// Name: John, City: New York

const user = { name: "John", age: 25, city: "New York" };

function extractUserInfo({ name, city = "Unknown" }) {
  console.log(`Name: ${name}, City: ${city}`);
}

extractUserInfo(user); // Output: Name: John, City: New York

// Q6 Resolve a Promise
// Resolve the following promise correctly:
// const myPromise = new Promise((resolve, reject) => {
// setTimeout(() => {
// resolve('Success!');
// }, 1000);
// });

// myPromise.then(console.log);

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise.then((message) => {
  console.log(message);
});
