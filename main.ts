#! /usr/bin/env node 
import inquirer from "inquirer"
import chalk from "chalk"

const randomnumber =Math.floor(Math.random()* 6 +1);

const answer = await inquirer.prompt([
    {
        message: "Guess a number between 1-6",
        type: "number", 
        name: "userguessvalue"
    }
]);

if (answer.userguessvalue === randomnumber) {
    console.log(chalk.green.bgWhiteBright("Congragulation,"), "you guess the correct number");
}else {
    console.log(chalk.red("opps,"), "you didn't guess the correct number");
}
console.log(chalk.green("corect,"), "number is", randomnumber);