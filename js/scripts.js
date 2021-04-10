// ---------- Business Logic ----------
// ********** Pizza Object **********
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

// ********** Order Object **********
function Order(){
  this.pizzas = {},
  this.totalPrice = 0;
  this.currentId = 0;
}

Order.prototype.addPizza = function(pizza){
  this.currentId += 1;
  pizza.id = this.currentId;
  this.pizzas[pizza.id] = pizza;
  this.totalPrice += pizza.price;
}

Order.prototype.removePizza = function(pizzaId){
  const pizzaToRemove = this.pizzas[pizzaId];
  if (pizzaToRemove === undefined) {
    return false;
  }
  this.totalPrice -= pizzaToRemove.price;
  delete this.pizzas[pizzaId];
  return true;
}

Order.prototype.resetOrder = function(){
  this.pizzas = {},
  this.totalPrice = 0;
  this.currentId = 0;
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

  let htmlString = `<div class="pizza-display" id=${pizza.id}><p class="pizza-size">${pizzaSize} Cheese Pizza`;
  if(numberOfToppings > 0){
    htmlString += "<br>"
    pizzaToppings.forEach(function(element, index){
      htmlString += element;
      if(index === numberOfToppings-1){
        htmlString += "<br>";
      } else {
        htmlString += ", ";
      }
    });
  }
  htmlString += `</p><p class="pizza-price text-right">$${pizzaPrice.toFixed(2)}`;
  htmlString += `<br><u class="remove-pizza">Remove</u></p></div>`;
  $("#priceDisplay").append(htmlString);
}

function attachPizzaDisplayListener(order, id){
  $(`div#${id}`).on("click", "u.remove-pizza", function(){
    order.removePizza(id);
    updateOrderTotalDisplay(order);
    $(this).closest(`#${id}`).remove();
  });
}

function updateOrderTotalDisplay(order){
  $("#totalDisplay").text(`${order.totalPrice.toFixed(2)}`);
}

$(document).ready(function(){
  populateToppings();
  const pizzaOrder = new Order();
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    const pizzaSize = $("#pizzaSize").val();
    $("#pizzaSize").val("").change();
    if(pizzaSize){
      const pizzaToppings = getPizzaToppingsSelected();
      const inputPizza = new Pizza(pizzaToppings, pizzaSize);
      inputPizza.calculatePrice();
      pizzaOrder.addPizza(inputPizza);
      displayPizzaPrice(inputPizza);
      attachPizzaDisplayListener(pizzaOrder, inputPizza.id);
      updateOrderTotalDisplay(pizzaOrder);
    } else {
      alert("Select size of pizza");
    }
  });
});