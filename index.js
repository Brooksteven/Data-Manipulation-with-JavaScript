//In this Assignment I will be using comments to separate the code for each activity and increase readability as well as to explain my processes when necessary

//Part 1: Math Problems

//notes on info provided: 
//We have 4 numbers that need to add up to 50
//two numbers must be odd
//no numbers can be larger than 25
//each number must be different

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`Do all numbers add up to 50: ${isSum50}`)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`Are at least two of the numbers odd: ${isTwoOdd}`)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 < 25;
console.log(`Are all numbers smaller than 25: ${isUnder25}`)

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`Are all the numbers unique numbers: ${isUnique}`)

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(`Are all variables this far true: ${isValid}`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  console.log(`Should we never do it this way again: ${dontDoThis}`)



// //Here we are checking to see if all numbers are divisible by 5 and caching the result in a variable.
  const isDiv5 = ((n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0) 
  console.log(`Are all numbers divisible by 5: ${isDiv5}`)

// //Here we are checking to see if the first number is larger than the last and caching the result in a variable
  const isLarger = n1 > n4 && true
  console.log(`Is the first number larger than the last: ${isLarger}`)

// //Now we are accomplishing the folowing arithmetic chain by 
  const isSum = !(n1 - n2)
  const isMulti = (isSum * n3)
  const isRemain = ((isMulti / n4) % 2)
  console.log(`How much is the Remainder: ${isRemain}`)