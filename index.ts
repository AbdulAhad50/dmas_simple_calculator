#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        message: "Enter Your First Number", type: "number", name: "firstNumber"
    },

    {
        message: "Enter Your Second Number", type: "number", name: "SecondNumber"
    },

    {
        message: "Select Operator As You Perfrom Action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"]
    }
]);

if (answer.operator === "Addition") {
    console.log("Result:", answer.firstNumber + answer.SecondNumber);
}

else if (answer.operator === "Substraction") {
    console.log("Result:", answer.firstNumber - answer.SecondNumber);

}
else if (answer.operator === "Division") {
    console.log("Result:", answer.firstNumber / answer.SecondNumber);
}

else if (answer.operator === "Multiplication") {
    console.log("Result:", answer.firstNumber * answer.SecondNumber);
}

else{
    console.log("Please Select a Valid Operator");
}











