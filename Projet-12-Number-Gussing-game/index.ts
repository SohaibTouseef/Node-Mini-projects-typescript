#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
 
// 1) computer will generate a random number done
// 2) user input for guessing number
// 3) cpmpare user input with computer  generated number and show restult - done

const randomNumber = Math.floor(Math.random()* 10+ 1);
const answers = await inquirer.prompt(
    [
        {
            name:"userGuessNumber",
            message:"enter your guess a number between 1-10.",
            type:"number",
        }
    ]
)
console.log(answers);

if(answers.userGuessNumber === randomNumber){
    console.log(chalk.bold.yellowBright("Congratulation your guessed tha right number"));
    
}else{
    console.log(chalk.bold.redBright("Your guess wrong number try again"));
    
}
