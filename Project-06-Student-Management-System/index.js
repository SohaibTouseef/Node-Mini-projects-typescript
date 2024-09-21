#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answers = await inquirer.prompt([
    {
        name: "student",
        message: "Enter student name:",
        type: "input",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value";
        },
    },
    {
        name: "course",
        message: "Select the course to enrolled",
        type: "list",
        choices: ["Ms.office", "HTML", "Css", "JavaScript", "TypesScript", "Python"]
    }
]);
const titionFee = {
    "Ms.office": 2000,
    "HTML": 2500,
    "Css": 3000,
    "JavaScript": 5000,
    "TypesScript": 6000,
    "Python": 7000
};
console.log(`\nTution Fees: ${titionFee[answers.course]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select Payment Method",
        choices: ["Bank Transfer", "Easypaise", "jazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "plaese enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);
const fees = titionFee[answers.course];
const paymentAmount = parseFloat(paymentType.amount);
if (fees === paymentAmount) {
    console.log(`Congratulation you have successfully enrolled in ${answers.course}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n********Status********\n");
        console.log(`Student Name: ${answers.student}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answers.course}`);
        console.log(`Tution fess paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System\n");
    }
}
else {
    console.log(`invalid amount due to course\n`);
}
