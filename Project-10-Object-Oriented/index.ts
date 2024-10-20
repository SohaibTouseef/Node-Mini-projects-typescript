#! /usr/bin/env node
import inquirer from "inquirer";

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
}
class Person {
    Student:Student[]=[]
    addStudent(obj:Student){
        this.Student.push(obj)
    }
}

const person  = new Person()

const programStart = async(person:Person)=>{
    do{

    
    console.log("Welcome!");
    const ans = await inquirer.prompt(
        [
            {
                name:"Select",
                type:"list",
                message: "Whom would you like to interact with?",
                choices:["Staff","Student","Exit"]
            }
        ]
    );
    if(ans.Select == "Staff"){
        console.log("You approach the staff room. please feel free to ask any question");    
    }
    else if(ans.Select == "Student"){
        const ans = await inquirer.prompt(
            [
                {
                    name:"Student",
                    type:"input",
                    message:"Enter the student's name you wish to engage with:",
                }
            ]
        );
        const student = person.Student.find(val => val.name== ans.Student)

        if(!student){
            const name = new Student(ans.Student)
            person.addStudent(name)
            console.log(`Hello i am ${name.name}. Nice to meet you!`);
            console.log("New Student added");
            console.log("Current Student List:");
            console.log(person.Student);
    
            
            
            
            
        }
        else{
        console.log(`Hello i am ${Student.name}. Nice to see you again`);
        console.log("Existing student List:");
        console.log(person.Student); 
        }


    }else if (ans.Select == "Exit" ){
        console.log("Exiting the program");
        process.exit()
        
    }

}while(true)  
}
programStart(person)

