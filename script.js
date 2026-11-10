
"use strict";

// Loop through numbers 1 to 20
for (let i = 1; i <= 20; i++) {

    // Check if divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    }
    // Check if divisible by 3
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    // Check if divisible by 5
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    // Otherwise, print just the number
    else {
        console.log(i);
    }
}
