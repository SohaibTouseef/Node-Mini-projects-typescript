#! usr/bin/env node
import inquirer from "inquirer";
// Banl Account class 
class BankAccount {
    accountNumber;
    Balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.Balance = balance;
    }
    // Debit money
    withdraw(amount) {
        if (this.Balance >= amount) {
            this.Balance -= amount;
            console.log(`Withdrawal of $ ${amount} Successful Remaining. Balance: $ ${this.Balance}`);
        }
        else {
            console.log("Insufficient Blance.");
        }
    }
    // Credit money
    deposit(amount) {
        if (amount > 100) {
            amount -= 1; // $1 fee charged if more than #100 is desposited
            this.Balance += amount;
            console.log(`Deposit of $ ${amount}Successful. Remaining Balance: $ ${this.Balance} `);
        }
    }
    // check Blance
    checkbalance() {
        console.log(`Current Balance: $ ${this.Balance}`);
    }
}
//  customers class
class Customers {
    firstName;
    lastName;
    gender;
    age;
    mobilenumber;
    account;
    constructor(firstName, lastName, gender, age, mobilenumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobilenumber = mobilenumber;
        this.account = account;
    }
}
//Create Bank account
const account = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 2000)
];
// Create customers
const customers = [
    new Customers("Sohaib", "Touseef", "Male", 20, 3320263890, account[0]),
    new Customers("Zohaib", "Touseef", "Male", 15, 3202895608, account[1]),
    new Customers("Rohaib", "Touseef", "Male", 13, 3172475265, account[2]),
];
// Function to interact with bank account
async function service() {
    do {
        const accountNumberInput = await inquirer.prompt([
            {
                name: "accountNumber",
                type: "number",
                message: "Enter your account number",
            }
        ]);
        const customer = customers.find(customer => customer.account.accountNumber === accountNumberInput.accountNumber);
        if (customer) {
            console.log(`Welcome, ${customer.firstName} ${customer.lastName}\n!`);
            const ans = await inquirer.prompt([
                {
                    name: "Select",
                    type: "list",
                    message: "Select and operation",
                    choices: ["Desposit", "Withdraw", "Check Balance", "Exit"]
                }
            ]);
            switch (ans.Select) {
                case "Desposit":
                    const depositAmount = await inquirer.prompt([
                        {
                            name: "amount",
                            type: "number",
                            message: "Enter the amount to deposit:",
                        }
                    ]);
                    customer.account.deposit(depositAmount.amount);
                    break;
                case "Withdraw":
                    const withdrawAmount = await inquirer.prompt([
                        {
                            name: "amount",
                            type: "number",
                            message: "Enter the amount to withdraw:",
                        }
                    ]);
                    customer.account.withdraw(withdrawAmount.amount);
                    break;
                case "Check Balance":
                    customer.account.checkbalance();
                    break;
                case "Exit":
                    console.log("Exiting the program....");
                    console.log("\n Thank you for using our bank services have a great day!");
                    return;
            }
        }
        else {
            console.log("Invalid account number,please try again.");
        }
    } while (true);
}
service();
