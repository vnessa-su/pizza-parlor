// ---------- Business Logic ----------
// *** Pizza ****
function Pizza(toppingsSelected, sizeSelected){
  this.toppings = toppingsSelected;
  this.size = sizeSelected;
}

Pizza.prototype.calculatePrice = function(){
  const size = this.size;
  const numberOfBasicToppings = this.toppings.basicToppings.length;
  const numberOfPremiumToppings = this.toppings.premiumToppings.length;
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
  price += (0.25 * numberOfBasicToppings);
  price += (1.00 * numberOfPremiumToppings);
  this.price = price;
}

// ---------- User Interface Logic ----------
function populateToppings(){
  const noCostSelection = ["No Cheese", "No Sauce", "Extra Sauce"];
  const basicToppings = ["Extra Cheese", "Pepperoni", "Green Peppers", "Mushroooms"];
  const premiumToppings = ["Grilled Chicken", "Artichokes", "Anchovies", "Pineapple"];
  noCostSelection.forEach(function(element){
    const htmlString = 
      `<div class="form-check form-check-inline">\
        <input type="checkbox" id="${element.toLowerCase().replace(/ /g, '-')}-topping" class="form-check-input no-cost-topping" value="${element}">\
        <label for="${element.toLowerCase().replace(/ /g, '-')}-topping" class="form-check-label no-cost-topping">${element}</label>\
      </div>`;
    $("#toppingsCheckbox").append(htmlString);
  });
  $("#toppingsCheckbox").append("<h6>(+$0.25):</h6>");
  basicToppings.forEach(function(element){
    const htmlString = 
      `<div class="form-check form-check-inline">\
        <input type="checkbox" id="${element.toLowerCase().replace(/ /g, '-')}-topping" class="form-check-input basic-topping" value="${element}">\
        <label for="${element.toLowerCase().replace(/ /g, '-')}-topping" class="form-check-label basic-topping">${element}</label>\
      </div>`;
    $("#toppingsCheckbox").append(htmlString);
  });
  $("#toppingsCheckbox").append("<h6>(+$1.00):</h6>");
  premiumToppings.forEach(function(element){
    const htmlString = 
      `<div class="form-check form-check-inline">\
        <input type="checkbox" id="${element.toLowerCase().replace(/ /g, '')}-topping" class="form-check-input premium-topping" value="${element}">\
        <label for="${element.toLowerCase().replace(/ /g, '')}-topping" class="form-check-label premium-topping">${element}</label>\
      </div>`;
    $("#toppingsCheckbox").append(htmlString);
  });
}

function getPizzaToppingsSelected(){
  let noCostSelections = [];
  let basicSelections = [];
  let premiumSelections = [];
  $("#toppingsCheckbox :checked").each(function(){
    let topping = $(this).val();
    if($(this).hasClass("no-cost-topping")){
      noCostSelections.push(topping);
    } else if($(this).hasClass("basic-topping")){
      basicSelections.push(topping);
    } else if($(this).hasClass("premium-topping")){
      premiumSelections.push(topping);
    } else {
      throw "Invalid topping selection";
    }
    $(this).prop('checked', false);
  });

  return {noCost: noCostSelections, basicToppings: basicSelections, premiumToppings: premiumSelections};
}

function displayPizzaPrice(pizza){
  const pizzaSize = pizza.size;
  const pizzaPrice = pizza.price;
  let pizzaToppings = Object.values(pizza.toppings.noCost);
  pizzaToppings = pizzaToppings.concat(Object.values(pizza.toppings.basicToppings));
  pizzaToppings = pizzaToppings.concat(Object.values(pizza.toppings.premiumToppings));
  const numberOfToppings = pizzaToppings.length;

  let htmlString = `<p class="pizza-size">${pizzaSize} Pizza</p><p class="pizza-toppings">`;
  pizzaToppings.forEach(function(element, index){
    htmlString += element;
    if(index === numberOfToppings-1){
      htmlString += "</p>";
    } else {
      htmlString += ", ";
    }
  });
  htmlString += `<p class="pizza-price float-right">$${pizzaPrice.toFixed(2)}</p>`;

  $("#priceDisplay").html(htmlString);
}

$(document).ready(function(){
  populateToppings();
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    const pizzaSize = $("#pizzaSize").val();
    const pizzaToppings = getPizzaToppingsSelected();
    const inputPizza = new Pizza(pizzaToppings, pizzaSize);
    inputPizza.calculatePrice();
    displayPizzaPrice(inputPizza);
    console.log(inputPizza);
  });
});