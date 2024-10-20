#! /usr/bin/env node
import inquirer from "inquirer"
const quiz :{
    question_1:string
    question_2:string
    question_3:string
    question_4:string
    question_5:string
    
} = await inquirer.prompt(
    [
        {
            name:"question_1",
            type:"list",
            message:"Q1.What is correct way to check if two values are not equal in Typescript?",
            choices:["a==b","a===b","a = b","a !== b"],
        },
        {
            name:"question_2",
            type:"list",
            message:" Q2.Which of the following characters is commmonly allowed in variable nmae in Typescript?",
            choices:["$","@","#","&"],
        },
        {
            name:"question_3",
            type:"list",
            message:" Q3.Which operator is commmonly a used for string concatenationin Typescript?",
            choices:["+","-","*","/"],
        },
        {
            name:"question_4",
            type:"list",
            message:" Q4.In Typescript which symbol is commonly used to terminate a satement ",
            choices:[".",":",";",","],
        },
        {
            name:"question_5",
            type:"list",
            message:" Q5.Which method of Inquirer.js is used to start the prompt interface and receive user input?",
            choices:["str()", "prompt()","init()","run()"],
        }  
    ]
);

let score:number = 0;
switch (quiz.question_1){
    case "a !== b":
    console.log("1. correct!");
    ++score;
    break;
    default:
    console.log("1. Incorrect");
    break;       
    
}
switch (quiz.question_2){
    case "$":
    console.log("2. correct!");
    ++score;
    break;
    default:
    console.log("2. Incorrect");
    break;       
    
}
switch (quiz.question_3){
    case "+":
    console.log("3. correct!");
    ++score;
    break;
    default:
    console.log("3. Incorrect");
    break;       
    
}
switch (quiz.question_4){
    case ";":
    console.log("4. correct!");
    ++score;
    break;
    default:
    console.log("4. Incorrect");
    break;       
    
}
switch (quiz.question_5){
    case "prompt()":
    console.log("5. correct!");
    ++score;
    break;
    default:
    console.log("5. Incorrect");
    break;       
    
}
console.log(`Score:${score}`);
