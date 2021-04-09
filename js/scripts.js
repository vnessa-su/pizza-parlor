// User Interface Logic
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
    console.log(pizzaSize);
    console.log(pizzaToppings);
  });
});