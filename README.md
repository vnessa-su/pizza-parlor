# Pizza Parlor

#### Calculates the cost of a pizza based on toppings and size chosen and adds it to the order.

#### By Vanessa Su

## Description

Presents the user with a set of checkboxes of different toppings to put on a pizza, as well as a few omission selections, and a dropdown box to select the size of the pizza. Based on the selection, the pizza price will be calculated when the Add to Order button is clicked and displayed in the Order section with an updated total price. Clicking on the Remove text below the pizza price will remove the pizza from the order and the total price is update to reflect that.

#### To see my live website go to [https://vnessa-su.github.io/pizza-parlor/](https://vnessa-su.github.io/pizza-parlor/)!

## User Story

* Select toppings
* Select a size
* Press the Add or Order button to display the price of the pizza in the Order section and Order total
* Click Remove text on order item to remove it
* Click Reset Order button to remove all pizzas from the order

## Technologies Used

* HTML
* CSS
* JavaScript
* VSCode

## Setup/Installation Requirements

Software Requirements:
* Web browser
* Code/text editor

View/edit webpage locally:
1. Download or clone this repository to your computer
    * To download, click the Code button and select Download ZIP
    * To clone, use: `git clone https://github.com/vnessa-su/pizza-parlor.git`
2. Navigate to the `/pizza-parlor` directory
3. Double click index.html to open it in your web browser or open in your code editor to modify


## Known Bugs

* Selecting No Cheese doesn't keep you from selecting Extra Cheese, and the same goes for the No Sauce and Extra Sauce options

## Contact Information

_For any questions or comments, please reach out through GitHub._

## License

[MIT License](license)

Copyright (c) 2021 Vanessa Su

## Tests

***
### **Describe:** Pizza()
***

### **Test:** It will create a Pizza object with input toppings and size properties.
### **Code:** 
    let toppings = {
        noCost: ["Extra Sauce"],
        basicToppings: ["Extra Cheese", "Pepperoni", "Green Peppers"],
        premiumToppings: ["Pineapple"]
    };
    let size = "Large";
    const customerPizza = new Pizza(toppings, size);
    customerPizza;
### **Expected Output:** 
    Pizza {
        toppings: {
            noCost: ["Extra Sauce"],
            basicToppings: ["Extra Cheese", "Pepperoni", "Green Peppers"],
            premiumToppings: ["Pineapple"]
        },
        size: "Large"
    }
&nbsp;

***
### **Describe:** Pizza.prototype.calculatePrice()
***

### **Test:** It will calculate and add a price property to the Pizza object with only the base price of the pizza if no toppings are selected.
### **Code:** 
    let toppings = {
        noCost: [],
        basicToppings: [],
        premiumToppings: []
    };
    let size = "Small";
    const customerPizza = new Pizza(toppings, size);
    customerPizza.calculatePrice();
    customerPizza;
### **Expected Output:** 
    Pizza {
        toppings: {
            noCost: [],
            basicToppings: [],
            premiumToppings: []
        },
        size: "Small",
        price: 5.00
    }
&nbsp;

### **Test:** It will calculate the price of the pizza based on the base price plus 0.25 per basic topping, 1.00 per premium topping, and add a price property to the Pizza object.
### **Code:** 
    let toppings = {
        noCost: ["Extra Sauce"],
        basicToppings: ["Extra Cheese", "Pepperoni", "Green Peppers"],
        premiumToppings: ["Pineapple"]
    };
    let size = "Medium";
    const customerPizza = new Pizza(toppings, size);
    customerPizza.calculatePrice();
    customerPizza;
### **Expected Output:** 
    Pizza {
        toppings: {
            noCost: ["Extra Sauce"],
            basicToppings: ["Extra Cheese", "Pepperoni", "Green Peppers"],
            premiumToppings: ["Pineapple"]
        },
        size: "Medium",
        price: 9.75
    }
&nbsp;

***
### **Describe:** Order()
***

### **Test:** It will create an Order object with an empty pizzas property, a totalPrice property of 0, and currentId property of 0.
### **Code:** 
    const customerOrder = new Order();
    customerOrder;
### **Expected Output:** 
    Order {
        pizzas: {},
        totalPrice: 0,
        currentId: 0
    }
&nbsp;

***
### **Describe:** Order.prototype.addPizza()
***

### **Test:** It will update the Pizza object with an id, add it to the pizzas property and update the total property of the Order object.
### **Code:** 
    const customerOrder = new Order();
    let toppingsOne = {
        noCost: ["Extra Sauce"],
        basicToppings: ["Extra Cheese", "Pepperoni", "Green Peppers"],
        premiumToppings: ["Pineapple"]
    };
    let sizeOne = "Medium";
    const customerPizzaOne = new Pizza(toppingsOne, sizeOne);
    customerPizzaOne.calculatePrice();
    let toppingsTwo = {
        noCost: ["Extra Sauce"],
        basicToppings: ["Extra Cheese", "Pepperoni"],
        premiumToppings: []
    };
    let sizeTwo = "Small";
    const customerPizzaTwo = new Pizza(toppingsTwo, sizeTwo);
    customerPizzaTwo.calculatePrice();
    customerOrder.addPizza(customerPizzaOne);
    customerOrder.addPizza(cusomterPizzaTwo);
    customerOrder;
### **Expected Output:** 
    Order {
        pizzas: {
            '1':
                Pizza {
                    toppings: {
                        noCost: ["Extra Sauce"],
                        basicToppings: ["Cheese", "Pepperoni", "Green Peppers"],
                        premiumToppings: ["Pineapple"]
                    },
                    size: "Medium",
                    price: 9.75
                },
            '2':
                Pizza {
                    toppings: {
                        noCost: ["Extra Sauce"],
                        basicToppings: ["Extra Cheese", "Pepperoni"],
                        premiumToppings: []
                    },
                    size: "Small",
                    price: 5.50
                }
        },
        totalPrice: 15.25,
        currentId: 2
    }
&nbsp;

***
### **Describe:** Order.prototype.removePizza()
***

### **Test:** It will remove the Pizza object by id and update the total property of the Order object.
### **Code:** 
    const customerOrder = new Order();
    let toppingsOne = {
        noCost: ["Extra Sauce"],
        basicToppings: ["Extra Cheese", "Pepperoni", "Green Peppers"],
        premiumToppings: ["Pineapple"]
    };
    let sizeOne = "Medium";
    const customerPizzaOne = new Pizza(toppingsOne, sizeOne);
    customerPizzaOne.calculatePrice();
    let toppingsTwo = {
        noCost: ["Extra Sauce"],
        basicToppings: ["Extra Cheese", "Pepperoni"],
        premiumToppings: []
    };
    let sizeTwo = "Small";
    const customerPizzaTwo = new Pizza(toppingsTwo, sizeTwo);
    customerPizzaTwo.calculatePrice();
    customerOrder.addPizza(customerPizzaOne);
    customerOrder.addPizza(customerPizzaTwo);
    customerOrder.removePizza(customerPizzaOne.id);
    customerOrder;
### **Expected Output:** 
    Order {
        pizzas: {
            '2':
                Pizza {
                    toppings: {
                        noCost: ["Extra Sauce"],
                        basicToppings: ["Extra Cheese", "Pepperoni"],
                        premiumToppings: []
                    },
                    size: "Small",
                    price: 5.50
                }
        },
        totalPrice: 5.50,
        currentId: 2
    }
&nbsp;

***
### **Describe:** Order.prototype.resetOrder()
***

### **Test:** It will set the Order object's pizzas property to empty, totalPrice to 0 and currentId to 0.
### **Code:** 
    const customerOrder = new Order();
    let toppingsOne = {
        noCost: ["Extra Sauce"],
        basicToppings: ["Extra Cheese", "Pepperoni", "Green Peppers"],
        premiumToppings: ["Pineapple"]
    };
    let sizeOne = "Medium";
    const customerPizzaOne = new Pizza(toppingsOne, sizeOne);
    customerPizzaOne.calculatePrice();
    let toppingsTwo = {
        noCost: ["Extra Sauce"],
        basicToppings: ["Extra Cheese", "Pepperoni"],
        premiumToppings: []
    };
    let sizeTwo = "Small";
    const customerPizzaTwo = new Pizza(toppingsTwo, sizeTwo);
    customerPizzaTwo.calculatePrice();
    customerOrder.addPizza(customerPizzaOne);
    customerOrder.addPizza(customerPizzaTwo);
    customerOrder.resetOrder();
    customerOrder;
### **Expected Output:** 
    Order {
        pizzas: {},
        totalPrice: 0,
        currentId: 0
    }
&nbsp;