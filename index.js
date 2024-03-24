#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWellcome to CodeWithIsmailbalouch CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Entr your guess number (number Limite from 1 to 5):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation ! you guess a correct number.");
}
else {
    console.log("sorry, you guess a wrong number");
}
