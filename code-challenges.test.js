// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("codedMessage", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in a string and returns a coded message", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// codedMessage › that takes in a string and returns a coded message
// ReferenceError: codedMessage is not defined
// Good failure

// b) Create the function that makes the test pass.

// For this coding challenge, I wrote two functions that both make the test pass. One function utilizes a standard for loop and as a stretch challenge, I wanted to see if I could make the test pass by using a higher-order function. I will provide the pseudo-code for both functions.

// Psuedo-code for standard for-loop method
// Declare a function called codedMessage that will take in one parameter, string.
// Within the function declare a variable called splitString which will be assigned to the value of string.split(""). This will turn the argument of string into an array with each letter having its own index for us to loop through.
// Set up a for loop with conditions i=0, i<splitString.length, and i++
// Within the for loop, set up a conditional stating that if the value at a particular index of splitString is strictly equal to 'a' OR 'A', then replace that letter with the string of '4'.
// Replacing the letter will be accomplished by implementing the .splice() method and inputting 3 arguments into the parentheses. The first argument will be the index i, the second argument will be how many elements we will be removing (for this problem, this will be 1) and the last argument will be what we are replacing that index with ('4').
// Set up 3 else if statements after initial if statement with the corresponding conditions for each letter.
// Once all the conditionals are set up, return the splitString with the add-on of the .join("") method since we want a string to be the output, not an array.

const codedMessage = (string) => {
  let splitString = string.split("")
  for(let i = 0; i<splitString.length; i++){
    if(splitString[i] === 'a' || splitString[i] === 'A'){
      splitString.splice(i,1,'4')
    } else if(splitString[i] === 'e' || splitString[i] === 'E'){
      splitString.splice(i,1,'3')
    } else if(splitString[i] === 'i' || splitString[i] === 'I'){
      splitString.splice(i,1,'1')
    } else if(splitString[i] === 'o' || splitString[i] === 'O'){
      splitString.splice(i,1,'0')
    }
  }
  return splitString.join("")
}

// The test passed (green) :D

// Psuedo-code for higher-order function
// Declare a function called codedMessage that will take in one parameter, string.
// Within the function declare a variable called splitString which will be assigned to the value of string.split("").
// Set up a higher-order function with the .map() method with the parameters of value and index. We will be using .map() since we are looking to return a modified array that is the same length.
// Similar to the conditional statements from the for-loop method, we will set up identical conditional statements in this function as well, we just need to refactor some of the syntax so that it matches with the .map() method.
// Once the conditionals are set up, return splitString.join("") outside of the function.

const codedMessage = (string) => {
  let splitString = string.split("")
  splitString.map((value,index) => {
    if(value === 'a' || value === 'A'){
      splitString.splice(index, 1, '4')
    } else if(value === 'e' || value === 'E'){
      splitString.splice(index, 1, '3')
    } else if(value === 'i' || value === 'I'){
      splitString.splice(index, 1, '1')
    } else if(value === 'o' || value === 'O'){
      splitString.splice(index, 1, '0')
    }
  })
  return splitString.join("")
}

// The test passed (green) :D

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("containsLetter", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(containsLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(containsLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

// containsLetter › takes in an array of words and a single letter and returns all the words that contain that particular letter.
// ReferenceError: containsLetter is not defined
// Good failure

// b) Create the function that makes the test pass.

// For this coding challenge, I wrote two functions that both make the test pass. One function utilizes a standard for loop and as a stretch challenge, I wanted to see if I could make the test pass by using a higher-order function. I will provide the pseudo-code for both functions.

// Declare a function called containsLetter that will take in two parameters, array and string.
// Set up a for loop within the function with the conditions of i=0, i<array.length, and i++.
// Within the for loop, set up a conditional statement with the condition being that if the value at the index of the array does not include the inputted string, then splice that value out of the array.
// Need to make sure to lowercase the string at each index and to use the .split() function to turn each string into its own array. Once that's done, use .includes() method to check if the inputted letter is in any of the indexes of that particular string.
// Finally, return array outside of the for loop.

const containsLetter = (array, string) => {
  for(let i = 0; i < array.length; i++){
      if(!array[i].toLowerCase().split("").includes(string)){
        array.splice(i,1)
      }
    }
    return array
}

// The test passed (green) :D

// Declare a function called containsLetter that will take in two parameters, array and string.
// Set up a variable called temp which will be assigned to the filter() method with value and index being the parameters.
// Within the filter method, return the value that includes the inputted string since we are filtering those values out of the original array.
// Also important here to utilize toLowerCase() and .split() method within the filter method to make the function work properly.
// Return temp outside of the filter method.

const containsLetter = (array, string) => {
    let temp = array.filter((value,index) => {
      return value.toLowerCase().split("").includes(string)
  })
  return temp
}

// The test passed (green) :D




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("fullHouse", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

// fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house
// ReferenceError: fullHouse is not defined
// Good failure


// b) Create the function that makes the test pass.

// I wasn't able to figure this one out unfortunately but I'll explain my thought process when tackling this challenge.
// The core idea I had in mind was to set up three variables that will be assigned the boolean value of false within the function. The first variable, threeOfAKind, is checking to see if there is a three of a kind within the array and if that is the case, then I would reassign that value to true.
// The second variable, pair, is also set to false. This variable is checking to see if a pair exists within the array and if that is the case, then I would reassign that value to true.
// The last variable, feelingLucky, is set to false. This variable is checking to see that if both threeOfAKind AND pair are true, then feelingLucky will be reassigned to true, meaning that a full house exists in the inputted array.
// This challenge was difficult and I ended up setting up two nested for-loops to check and see if a three of a kind and a pair exists. I also set up a count variable that would increment up everytime there was a duplicate value in the array. If that count variable hit a certain value such as 3, that would indicate that there three values that are the same within the array, hence a three of a kind. The same logic applies for the variable, pair.
// Unfortunately, running this didn't pass the test.

const fullHouse = (array) => {
  let threeOfAKind = false
  let pair = false
  let feelingLucky = false

  for(let i = 0; i<array.length; i++){
    let count = 1
    for(let j = i+1; j<array.length; j++){
      if(array[i] === array[j]){
        count++
      }
    }
    if(count === 3){
      threeOfAKind = true
    }
  }

  for(let i=0; i<array.length; i++){
    let count = 1
    for(let j = i+1; j<array.length; j++){
      if(array[i] === array[j]){
        count++
      }
    }
    if(count === 2){
      pair = true
    }
  }

  if(threeOfAKind === true && pair === true){
    feelingLucky = true
  } else{
    feelingLucky = false
  }
  return feelingLucky
}
