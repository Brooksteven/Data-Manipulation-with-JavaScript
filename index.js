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




  //PART 2

  /**info notes 
  *distance of trip = 1500 miles
  *55mil/hr = 30mil/gal
  *60mil/hr = 28mil/gal
  *75mil/hr = 23mil/gal
  *Money = $175
  *Cost of fuel = $3/gal
  */

  //Question 1: How many gallons of fuel will you need for the entire trip
  /** What we know
   * entire trip = 1500 miles
   * 55mil/hr = 30mil/gal
   * 60mil/hr = 28mil/gal
   * 75mil/hr = 23mil/gal
   * 1500mil / 30mil/gal = 50 gal
   * 
   */
  const tripDistance = 1500
  const mile55 = 55
  const mile60 = 60
  const mile75 = 75
  const gal30 = 30
  const gal28 = 28
  const gal23 = 23
  const budget = 175
  const avgFuel = 3

  const gallonsNeeded55 = (tripDistance / gal30)
  console.log(`I will need ${gallonsNeeded55} gallons for the entire trip when traveling at 55 miles per hour while getting 30 miles per gallon, which also makes the most sense because you get the most gallons.`)

  const gallonsNeeded60 = (tripDistance / gal28)
  console.log(`I will need ${gallonsNeeded60} for the entire trip when traveling at 60 miles per hour while getting 28 miles per gallon.`)

  const gallonsNeeded75 = (tripDistance / gal23)
  console.log(`I will need ${gallonsNeeded75} for the entire trip when traveling at 75 miles per hour while getting 23 miles per gallon.`)

  //Question 2: Will your budget be enough to cover the fuel expense?
  /** What we know
   * Money = $175
   * avg per gallon = $3
   * gal30 = 30
   * gal28 = 28
   * gal23 = 23
   */


  const fuelExp55 = (gal30 * avgFuel) < budget
  console.log(`Will the budget be enough for the trip: ${fuelExp55}`)

  const fuelExp60 = (gal28 * avgFuel) < budget
  console.log(`Will the budget be enough for the trip: ${fuelExp60}`)

  const fuelExp75 = (gal23 * avgFuel) < budget
  console.log(`Will the budget be enough for the trip: ${fuelExp75}, and will also make the most sense because it is the most affordable.`)

  //Question 3: How long will the trip take, in hours?
  /**what we know
   * total trip miles = 1500 miles
   * 55mil/hr
   * 60 mil/hr
   * 75mil/hr
   */

  const tripHours55 = (tripDistance / mile55)
  console.log(`The trip will take ${tripHours55} in hours.`)

  const tripHours60 = (tripDistance / mile60)
  console.log(`The trip will take ${tripHours60} in hours.`)

  const tripHours75 = (tripDistance / mile75)
  console.log(`The trip will take ${tripHours75} in hours, which will make the most sense for the trip hours wise.`)



