//Logical operator respond --> Boolean


/*
//Logical AND operator (&&) --> Both Condition should be "True"

    console.log (true && true) //output: True
    console.log (false && true) //output: false --> this operator doesn't check the second condition if first condition is false.it check the second condition only if first condition is true
    console.log (true && false) //output: false
    console.log (false && false) //output: false

    console.log (10>20 && 20>5) //output: false -->(false && true)
    console.log (10<20 && 20<5) //output: false -->(true && false)
    console.log (10<20 && 20>5) //output: true  -->(true && true)
    console.log (10>20 && 20<5) //output: false -->(false && false)
*/





/*
//Logical OR operator (||) --> any one condition is true
  
console.log (true || false) //output: true 
console.log (false || true) //out: true
console.log (false || false) //output: false
console.log (true || true) //output: true

console.log (10>20 || 20>5) //output: true -->(false || true)
console.log (10<20 || 20<5) //output: true -->(true || false)
console.log (10<20 || 20>5) //output: true -->(true || true)
console.log (10>20 || 20<5) //output: false -->(false || false)
*/






/*
//Logical NOT operator (!) --> return "INVSERSE value"

console.log(!(true)) //output: false
console.log(!(false)) //output: true

console.log(!(10<20)) //output: false -->(True) 
console.log(!(10>20)) //output: true  -->(false)
*/



/*
// Interview Assessment Criteria
let hasRelevantExperience = false; // Candidate has relevant job experience (false in this case)
let hasGoodCommunication = true;  // Candidate has good communication skills (true in this case)
let passedTechnicalRound = false; // Candidate passed the technical interview round (false in this case)

// Determine if the candidate proceeds to the HR round
let proceedToNextRound = hasRelevantExperience && hasGoodCommunication || passedTechnicalRound;

if (proceedToNextRound) {
  console.log("Candidate proceeds to the HR round.");
} else {
  console.log("Candidate does not proceed to the HR round.");
}
*/



/*
// Weather Conditions
let isSunny = false;  // is weather is sunny or not
let isRainy = false;  // is weathe is rainny or not

// Determine if either of the conditions is true.i want you should take an 'umbrella'
let condition = isSunny || isRainy;

if (condition) {
  console.log("Please take an umbrella with you.");
} else {
  console.log("Have a good day!");
}
*/



/*
//whatsapp block and un-block  --> inverse operator if condition is true --> false , if condition is false --> true

let isTheyBlocked = false; //output: false --> so, it print the false statement which is else statement

// Check if the contact is blocked
if (!isTheyBlocked){
    console.log("You Unblocked this contact! tap to block") //-->if output is true this will be printed
}else{
    console.log("You blocked this contact! tap to Unblock") //-->if output is false this will be printed
}
*/