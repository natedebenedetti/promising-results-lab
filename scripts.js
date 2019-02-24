// step 2: Create promise chain using slow math.

// slowMath.add(6, 2).then((answer) => { //all of the console logs will wait 1 second to log due to slow math's promises being written with a setTimeout of 1000.
//     console.log(answer); // log's the "answer" for adding 6 + 2.
//     return slowMath.multiply(answer, 2); // multiplies "answer" by 2.
// }).then((answer) => {
//     console.log(answer); // log's new value of "answer".
//     return slowMath.divide(answer, 4); // divides "answer" by 4.
// }).then((answer) => {
//     console.log(answer); //log's new value of "answer".
//     return slowMath.subtract(answer, 3); // subtracts 3 from "answer".
// }).then((answer) => {
//     console.log(answer); //log's new value of "answer".
//     return slowMath.add(answer, 98); //adds 98 to "answer".
// }).then((answer) => {
//     console.log(answer); //log's new value of "answer".
//     return slowMath.remainder(answer, 2); //finds the remainder of dividing "answer" by 2.
// }).then((answer) => {
//     console.log(answer); //log's new value of "answer".
//     return slowMath.multiply(answer, 50); // multiplies "answer" by 50.
// }).then((answer) => {
//     console.log(answer); //log's new value of "answer".
//     return slowMath.remainder(answer, 40); //finds the remainder of dividing "answer" by 40.
// }).then((answer) => { 
//     console.log(answer); //log's new value of "answer".
//     return slowMath.add(answer, 32); //adds 32 to "answer"
// }).then((answer) => {
//     console.log(`The final result is ${answer}`); //log's new value of "answer" concatenated onto the end of the string.
// }).catch((error) => { // provides a catch to handle any errors that may arise.
//     console.log(error); // logs the error to the console.
// });
//step 3: opening index.html in browser displays all "answer"'s correctly and results in expected final value of 42.
//step 4: changing the first step to add 1 and 1 together results in failure at js:11 because the value becomes a negative number at this point and slowMath promises are written to throw errors is negative numbers are involved. 


//ASYNC/AWAIT

const doMath = async () => {

    try {
        let answer = await slowMath.add(6, 2);
        console.log(answer);
        answer = await slowMath.multiply(answer, 2);
        console.log(answer);
        answer = await slowMath.divide(answer, 4);
        console.log(answer);
        answer = await slowMath.subtract(answer, 3);
        console.log(answer);
        answer = await slowMath.add(answer, 98);
        console.log(answer);
        answer = await slowMath.remainder(answer, 2);
        console.log(answer);
        answer = await slowMath.multiply(answer, 50);
        console.log(answer);
        answer = await slowMath.remainder(answer, 40);
        console.log(answer);
        answer = await slowMath.add(answer, 32);
        console.log(`The final result is ${answer}`);
    } catch(error) {
        console.log(error);
    }
};

doMath();