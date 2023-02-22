
const farePerKm = 0.21;
document.getElementById("ticketFare").innerHTML = `${farePerKm} &euro;`;

const underageDiscount = 20 / 100;
const seniorDiscount = 40 / 100;

const userAge = parseInt(prompt("Enter your age.\nThank you."));
// userAge validity test
if (!(isNaN(userAge))) {
    // test passed
    const userDistance = parseInt(prompt("Enter the distance in kilometers from the arrival station."));
    // userDistance validity test
    if (!(isNaN(userDistance))) {
        // test passed

        document.getElementById("userDistance").innerHTML = userDistance;
        let price = userDistance * farePerKm;

        // discount check
        if (userAge < 18) {
            // 20% discount to underage
            price = price - (price * underageDiscount);
            document.getElementById("ticketDiscount").innerHTML = (`Underage ${underageDiscount * 100}% discount applied.`);
        } else if (userAge > 65) {
            // 40% discount to seniors
            price = price - (price * seniorDiscount);
            document.getElementById("ticketDiscount").innerHTML = (`Senior ${seniorDiscount * 100}% discount applied.`);
        }

        // fixing price to 2 digits after decimal point
        price = price.toFixed(2);

        document.getElementById("ticketPrice").innerHTML = `Final ticket price: ${price} &euro;`;
    
    } else {
        // userDistance validity test error
        alert ("Unable to proceed, non-numeric distance value entered.");
    }
} else {
    // userAge validity test error
    alert ("Unable to proceed, non-numeric age value entered.");
}



