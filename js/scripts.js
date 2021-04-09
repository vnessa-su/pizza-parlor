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
    case ("Small"):
      price = 5.00;
      break;
    case ("Medium"):
      price = 8.00;
      break;
    case ("Large"):
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
let size = "Medium";
const customerPizza = new Pizza(toppings, size);
customerPizza.calculatePrice();
customerPizza;
// displayPizzaPrice(customerPizza);

// ---------- User Interface Logic ----------
function getPizzaToppingsSelected(){
  let toppingsSelected = [];
  $("#toppingsCheckbox :checked").each(function(){
    toppingsSelected.push($(this).val());
  });
  return toppingsSelected;
}

function displayPizzaPrice(pizza){
  const pizzaSize = pizza.size;
  const pizzaToppings = pizza.toppings;
  const numberOfToppings = pizzaToppings.length;
  const pizzaPrice = pizza.price;
  console.log(pizzaSize);
  console.log(pizzaToppings);
  console.log(pizzaPrice);
  console.log(pizzaToppings.length)
  let htmlString = `<p class="pizza-size">${pizzaSize} Pizza</p><p class="pizza-toppings">`;
  pizzaToppings.forEach(function(element, index){
    htmlString += element;
    if(index === numberOfToppings-1){
      htmlString += "</p>";
    } else {
      htmlString += ", ";
    }
  });
  htmlString += `<p class="pizza-price">$${pizzaPrice.toFixed(2)}</p>`;
  $("#priceDisplay").html(htmlString);
}

$(document).ready(function(){
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    const pizzaSize = $("#pizzaSize").val();
    const pizzaToppings = getPizzaToppingsSelected();
    const inputPizza = new Pizza(pizzaToppings, pizzaSize);
    inputPizza.calculatePrice();
    displayPizzaPrice(inputPizza);
    console.log(pizzaSize);
    console.log(pizzaToppings);
    console.log(inputPizza);
  });
});