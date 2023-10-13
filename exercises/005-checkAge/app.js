function checkAge(name, age) {
  // your code here
  if (age < 21) {
    return `Go home, ${name}!`;
  } else {
    return `Welcome, ${name}!`;
  }
}

// Example usage:
let output = checkAge('Adrian', 16);
console.log(output); // --> 'Welcome, Adrian!'

