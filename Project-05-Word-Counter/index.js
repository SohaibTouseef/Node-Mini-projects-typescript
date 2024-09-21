import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "enter your sentence to count"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is : ${words.length}`);
