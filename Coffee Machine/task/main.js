const input = require('sync-input')

/*

-----------Estágio 2-------------

let userCups = Number(input("Write how many cups of coffee you will need:"));
console.log(`For ${userCups} cups of coffee you will need:`);
console.log(`${200 * userCups} ml of water`);
console.log(`${50 * userCups} ml of milk`);
console.log(`${15 * userCups} g of coffee beans`);

 -----------Estágio 3-------------

let water = input("Write how many ml of water the coffee machine has:\n");

let milk = input("Write how many ml of milk the coffee machine has\n");

let beans = input("Write how many grams of coffee beans the coffee machine has:\n")

let userCups = Number(input("Write how many cups of coffee you will need:\n"));

let machineCups = Math.floor(Math.min(water / 200, milk / 50, beans / 15));

if (machineCups === userCups){
    console.log("Yes, I can make that amount of coffee");
} else if ( machineCups > userCups){
    console.log(`"Yes, I can make that amount of coffee (and even ${machineCups - userCups} more than that)`);
}else {
    console.log(`"No, I can make only ${machineCups} cups of coffee"`);
}
*/

let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;
let userChoice;

function status() {
    console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${beans} g of coffee beans
${cups} disposable cups
$${money} of money\n`)
}


do {

    userChoice = input( "Write action (buy, fill, take, remaining, exit):\n").toLowerCase();

    switch (userChoice) {
        case "remaining" : {
            status();
            break;
        }

        case "fill" : {
            water += Number(input("Write how many ml of water you want to add:\n"));
            milk += Number(input("Write how many ml of milk you want to add:\n"));
            beans += Number(input("Write how many grams of coffee beans you want to add:\n"));
            cups += Number(input("Write how many disposable cups you want to add:\n"));
            console.log("");
            break;
        }

        case "take" : {
            console.log(`I gave you $${money}`);
            money = 0;
            break;
        }

        case "buy" : {
            let userCoffee = Number(input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n"));
            switch (userCoffee) {
                case "back" : {
                    break;
                }

                case 1 : {
                    if (water < 250) {
                        console.log("Sorry, not enough water!\n");
                        break;
                    } else if (beans < 16) {
                        console.log("Sorry, not enough coffee beans!\n");
                        break;
                    } else if (cups < 1) {
                        console.log("Sorry, not enough disposable cups!\n");
                        break;
                    } else {
                        console.log("I have enough resources, making you a coffee!\n");
                        water -= 250;
                        beans -= 16;
                        cups--;
                        money += 4;
                        break;
                    }
                }

                case 2: {
                    if (water < 350) {
                        console.log("Sorry, not enough water!\n");
                        break;
                    } else if (milk < 75) {
                        console.log("Sorry, not enough milk!\n");
                        break;

                    } else if (beans < 20) {
                        console.log("Sorry, not enough coffee beans!\n");
                        break;
                    } else if (cups < 1) {
                        console.log("Sorry, not enough disposable cups!\n");
                        break;
                    } else {
                        console.log("I have enough resources, making you a coffee!\n");
                        water -= 350;
                        milk -= 75;
                        beans -= 20;
                        cups--;
                        money += 7;
                        break;
                    }
                }

                case 3: {
                    if (water < 200) {
                        console.log("Sorry, not enough water!\n");
                        break;
                    } else if (milk < 100) {
                        console.log("Sorry, not enough milk!\n");
                        break;

                    } else if (beans < 12) {
                        console.log("Sorry, not enough coffee beans!\n");
                        break;
                    } else if (cups < 1) {
                        console.log("Sorry, not enough disposable cups!\n");
                        break;
                    } else {
                        console.log("I have enough resources, making you a coffee!\n");
                        water -= 200;
                        milk -= 100;
                        beans -= 12;
                        cups--;
                        money += 6;
                        break;
                    }
                }
            }

            break;
        }

    }

} while (userChoice !== "exit");