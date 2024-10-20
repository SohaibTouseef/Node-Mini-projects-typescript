#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// let todo:string[] = [];
// let condiation : boolean = true;
// while(condiation){
//     let  addTask = await inquirer.prompt(
//         [
//             {
//              name:"Todos",
//              message:"What you want to add in your Todos",
//              type:"input"

//             },
//             {
//                 name:"addmore",
//                 message:"do you want to add more ?",
//                 type:"confirm",
//                 default: false
             
                
//             }
//         ]
//     )
//     todo.push(addTask.Todos)
//     condiation=addTask.addmore
//     console.log(todo);
    
// } 

let todos:string[] = [];
let condiation : boolean = true;
while(condiation){
    let  ans = await inquirer.prompt(
        [
            {
             name:"select",
             message:"Select an operation",
             type:"list",
             choices:["Add ","Update ", "View" ,"Delete ","Exit "],

            }
           
    ]);
     if(ans.select === "Add" ){
        let addTodos = await inquirer.prompt(
            [
                {
                    name:"todo",
                    type:"input",
                    message: "Add items in the list ",
                    validate: function (input){
                        if(input.trim() == ""){
                            return "please enter a nom-empty item."
                        }
                        return true;
                    }

                }
            ]
        );
        todos.push(addTodos.todo)
        console.log(todos);
        
       
        
     }

     if(ans.select === "Update" ){
        let todosupdate = await inquirer.prompt(
            [
                {
                    name:"todo",
                    type:"list",
                   message:"Update items in the list,",
                   choices : todos.map(item => item)
                }
            ]
        );
        let addTodos = await inquirer.prompt(
            [
                {
                    name:"todo",
                    message: "Add items in the list ",
                    type:"input",

                }
            ]
        );
        let newTodo = todos.filter(val => val !== todosupdate.todo);
        todos = [...newTodo,addTodos.todo]
        console.log(todos);
        
     }
     if(ans.select === "View" ){
        console.log("*****To-Do List ****");
        console.log(todos); 
     }
     if(ans.select === "Delete" ){
        let deletetodo = await inquirer.prompt(
            [
                {
                   name:"todo",
                    type:"list",
                   message:"select items to delete ,",
                   choices : todos.map(items => items)
                }
            ]
        );
        let newTodo = todos.filter(val => val !== deletetodo.todo);
        todos = [...newTodo]
        console.log(todos);


     }
     if(ans.select === "Exit" ){
        console.log("Exiting program..");
        condiation =false;
        
        
    }
  
} 