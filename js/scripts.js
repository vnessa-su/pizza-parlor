// ---------- Business Logic ----------
// *** Pizza ****
function Pizza(toppingsSelected, sizeSelected) {
  this.toppings = toppingsSelected;
  this.size = sizeSelected;
}

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
    console.log(pizzaSize);
    console.log(pizzaToppings);
    console.log(inputPizza);
  });
});