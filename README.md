# Pizza Parlor

#### Calculates the cost of a pizza based on toppings and size chosen.

#### By Vanessa Su

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

#### To see my live website go to {GH_PAGES_LINK_HERE}!

## User Story

* Select toppings
* Select a size
* Press the Submit button to display the price of the pizza

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _VSCode_

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

_No known bugs_

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
    let toppings = ["cheese", "pepperoni", "green peppers"];
    let size = "large";
    const customerPizza = new Pizza(toppings, size);
    customerPizza;
### **Expected Output:** 
    Pizza {
        toppings: ["cheese", "pepperoni", "green peppers"],
        size: "large"
    }
&nbsp;