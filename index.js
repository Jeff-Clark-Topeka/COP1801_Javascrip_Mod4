//Prompt the user to enter the dollar amount of the service and whether the quality of the service was great(20%), ok(15%), or poor(10%).

let serviceAmount = prompt("Enter the service amount between $5.00 and $500.00.");

let serviceQuality = prompt("Was the service quality great, ok, or poor?");

let tip = 0;

//Create a function to verify a valid service quality was entered. If invalid, display a message and end code. 

function validQuality () {
    if (serviceQuality === "great" || serviceQuality === "ok" || serviceQuality === "poor") {
        return serviceQuality;
    } else {
        prompt("Please enter great, ok, or poor for the quality.")
    }
};

//Create a function to verify a service amount between $5 and $500 was entered. If invalid response was entered, display a message and end code. 

function validAmount () {
    if (serviceAmount >= 5 && serviceAmount <= 500) {
        return serviceAmount;
    } else {
        prompt("Please enter an amount between $5.00 and $500.00");
    }
};
 
//Create a function to calculate the tip amount and return the value. If valid value is entered, call the function to calculate the tip.

function tipAmount () {

    if (serviceQuality === "great") {
        tip = parseFloat(serviceAmount * 0.20).toFixed(2);
        console.log(tip);
    } else if (serviceQuality === "ok") {
        tip = parseFloat(serviceAmount * 0.15).toFixed(2);
    } else if (serviceQuality === "poor") {
        tip = parseFloat(serviceAmount * 0.10).toFixed(2);
    }
}; 

validQuality();
validAmount();
tipAmount();

//Display the tip amount to the user using a descriptive message that includes the service amount, the recommended tip, and the service quality the tip is based on.

document.write(`You entered the service amount of $${serviceAmount} and the quality of your service was ${serviceQuality}. Based on this, we recommend your tip to be $${tip}.`);