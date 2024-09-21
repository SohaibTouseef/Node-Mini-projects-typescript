#! usr/bin/evn node
import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
    {
     name:"firstNumber",
     message:"Enter First number",
     type:"number",
      
    },
    {
        name:"SecondNumber",
        message:"Enter Secondnumber",
        type:"number",
    },
    {
        name:"operators",
        message:"Select one of the  to perform action",
        type:"list",
        choices:["Addition","Subraction","Multiplication","Division", "Exponentiation", "Percentage",]
    }
]);
if(answer.operators === "Addition"){
    console.log( answer.firstNumber+answer.SecondNumber);
    
}else if(answer.operators === "Subraction"){
    console.log(answer.firstNumber - answer.SecondNumber);
    
}else if(answer.operators === "Multiplication"){
    console.log(answer.firstNumber * answer.SecondNumber);
    
}
else if(answer.operators === "Division"){
    console.log(answer.firstNumber / answer.SecondNumber);
    
}
else if(answer.operators === "Exponentiation"){
    console.log(answer.firstNumber ** answer.SecondNumber);
    
}else if(answer.operators === "Percentage"){
    console.log(answer.firstNumber / answer.SecondNumber);
    
}else{
    console.log(" Sorry incorrect operators");
    
}
