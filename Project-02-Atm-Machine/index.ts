#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 100000 // dollar
const pinCode = 1234;
const pinAnswers = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"Enter your pin",
            type: "number",

        }
    ]
);
 if(pinAnswers.pin === pinCode){
    console.log(chalk.bold.yellowBright("Correct your Pin Code"));

    const operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select your option",
                type:"list",
                choices:["Withdraw","Fast Cash","Check Balance",]
            }
        ]
    );
    if(operationAns.operation === "Withdraw"){

        const amountAns = await inquirer.prompt(
            [
                {
                    name:"Amount",
                    message:"Enter your Amount",
                    type:"number",
                }
            ]
        )
        myBalance -=amountAns.Amount
        console.log(chalk.bold.yellowBright("your remaining balance is:" + myBalance));

    }else if(operationAns.operation === "Check Balance"){
        console.log(chalk.bold.yellowBright(`your balance is: ${myBalance}`));

    }else if(operationAns.operation === "Fast Cash"){
        let fastCash = await inquirer.prompt(
            [
                {
                    name:"Cash",
                    message:"plaese select anyone option",
                    type:"list",
                    choices:["1000","5000","10000","100000"]
                }
            ]
        )
        myBalance -=fastCash.Cash
        console.log(chalk.bold.yellowBright(`your balance is: ${myBalance}`));
    }
    

 } else{
    console.log(chalk.bold.redBright("Incorrect Your pin code"));
}
