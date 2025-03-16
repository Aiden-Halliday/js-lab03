const output = document.getElementById('output'); //gets the p tag that will store the output of the Hamburger object

function Hamburger(bunType, pattyAmount, pattyType, cheeseType, sauces, toppings) {
    this.bunType = bunType; //variable for bunType
    this.pattyAmount = pattyAmount; //variable for patty amount
    this.pattyType = pattyType; //variable for pattyType
    this.cheeseType = cheeseType; //variable for cheeseType
    this.sauces = sauces; //variable for sauce
    this.toppings = toppings; //variable for toppings
    this.burgerDetails = function () { //returns all the details of the burger
        return `This hamburger has a ${this.bunType} bun, ${this.pattyAmount} ${this.pattyType} patty(s), with ${this.cheeseType} cheese, a sauce of ${this.sauces}, and a topping of ${this.toppings}.`;
    }
}

let burger1 = new Hamburger("regular", "double", "beef", "swiss", "mustard", "pickles"); //creates an instance of the burger object
output.textContent = burger1.burgerDetails(); //displays the output to the p tag

