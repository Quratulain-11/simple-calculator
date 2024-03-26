#! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstnumber" },
    { message: "Enter your second number", type: "number", name: "secondnumber" },
    { message: "Select one of the operator to perform operation:",
        type: "list",
        name: "operator",
        choices: ["Additon", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement 
if (answer.operator === "Addition") {
    console.log("your value is " + answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log("your value is " + answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log("your value is " + answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid operators");
}
