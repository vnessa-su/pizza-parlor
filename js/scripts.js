// ---------- Business Logic ----------
// *** Pizza ****
function Pizza(toppingsSelected, sizeSelected){
  this.toppings = toppingsSelected;
  this.size = sizeSelected;
}

Pizza.prototype.calculatePrice = function(){
  const size = this.size;
  const numberOfToppings = this.toppings.length;
  let price;
  switch (size){
    case ("small"):
      price = 5.00;
      break;
    case ("medium"):
      price = 8.00;
      break;
    case ("large"):
      price = 10.00;
      break;
    default:
      throw "Invalid pizza size";
  }
  price += (0.25 * numberOfToppings);
  this.price = price;
}

// TEST !!!!!TO BE REMOVED!!!!!
let toppings = ["cheese", "pepperoni", "green peppers"];
let size = "medium";
const customerPizza = new Pizza(toppings, size);
customerPizza.calculatePrice();
customerPizza;

// ---------- User Interface Logic ----------
function getPizzaToppingsSelected(){
  let toppingsSelected = [];
  $("#toppingsCheckbox :checked").each(function(){
    toppingsSelected.push($(this).val());
  });
  return toppingsSelected;
}

$(document).ready(function(){
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    const pizzaSize = $("#pizzaSize").val();
    const pizzaToppings = getPizzaToppingsSelected();
    const inputPizza = new Pizza(pizzaToppings, pizzaSize);
    inputPizza.calculatePrice();
    console.log(pizzaSize);
    console.log(pizzaToppings);
    console.log(inputPizza);
  });
});