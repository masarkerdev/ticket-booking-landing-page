// const allBtn = document.getElementsByClassName('seat');
// let seatCount = 0;

// const selectedSeats = [];
// const selectedContainer = document.getElementById('injected-div');

// const totalSeats=40;

// for (const btn of allBtn) {
//     btn.addEventListener("click", function (e) {
//         if (!btn.disabled) { // Check if button is not disabled
//             if (btn.style.backgroundColor !== 'rgb(29, 209, 0)') { // Check if background color is not #1DD100
//                 if (seatCount < 4) {
//                     btn.style.backgroundColor = '#1DD100'; // Change background color to #1DD100
//                     seatCount += 1;
//                     selectedSeats.push(btn.innerText);
//                 }
//             } else {
//                 btn.style.backgroundColor = ''; // Remove background color
//                 seatCount -= 1;
//                 const index = selectedSeats.indexOf(btn.innerText);
//                 if (index !== -1) {
//                     selectedSeats.splice(index, 1);
//                 }
//             }

//             document.getElementById('seat-count').innerHTML = seatCount;

//             for (const otherBtn of allBtn) {
//                 if (otherBtn !== btn && otherBtn.style.backgroundColor !== 'rgb(29, 209, 0)') {
//                     otherBtn.disabled = seatCount === 4;
//                 }
//             }

//             // Clear or append elements based on seat selection
//             if (seatCount === 0) {
//                 selectedContainer.innerHTML = ''; // Clear all appended elements
//             } else {
//                 updateSelectedSeats(selectedSeats);
//             }
//         }
//     });
// }

// function updateSelectedSeats(selectedSeats) {
//     selectedContainer.innerHTML = ''; // Clear existing elements
//     selectedSeats.forEach(selectedSeatName => {
//         const h4 = document.createElement('h4');
//         h4.innerText = selectedSeatName;
//         const coachType = document.createElement('h4');
//         coachType.innerText = "Economy ";
//         const displaySeatprice = document.createElement('h4');
//         displaySeatprice.innerText = 550;

//         selectedContainer.append(h4);
//         selectedContainer.append(coachType);
//         selectedContainer.append(displaySeatprice);
//     });
// }


// // remove seat number from total seats

// const allBtn = document.getElementsByClassName('seat');
// let seatCount = 0;
// let totalSeats = 40; // Total number of seats
// let priceOfSeat=0;
// const selectedSeats = [];
// const selectedContainer = document.getElementById('injected-div');

// for (const btn of allBtn) {
//     btn.addEventListener("click", function (e) {
//         if (!btn.disabled) { // Check if button is not disabled
//             if (btn.style.backgroundColor !== 'rgb(29, 209, 0)') { // Check if background color is not #1DD100
//                 if (seatCount < 4 && totalSeats > 0) { // Check if there are available seats
//                     btn.style.backgroundColor = '#1DD100'; // Change background color to #1DD100
//                     seatCount += 1;
//                     selectedSeats.push(btn.innerText);
//                     totalSeats -= 1; // Decrease total seats count
//                     priceOfSeat*=500;
//                 }
//             } else {
//                 btn.style.backgroundColor = ''; // Remove background color
//                 seatCount -= 1;
//                 const index = selectedSeats.indexOf(btn.innerText);
//                 if (index !== -1) {
//                     selectedSeats.splice(index, 1);
//                 }
//                 totalSeats += 1; // Increase total seats count
//             }

//             document.getElementById('seat-count').innerHTML = seatCount;
//             document.getElementById('total-seats').innerHTML = totalSeats;

//             for (const otherBtn of allBtn) {
//                 if (otherBtn !== btn && otherBtn.style.backgroundColor !== 'rgb(29, 209, 0)') {
//                     otherBtn.disabled = seatCount === 4 || totalSeats === 0; // Disable buttons if no available seats or maximum seats selected
//                 }
//             }

//             // Clear or append elements based on seat selection
//             if (seatCount === 0) {
//                 selectedContainer.innerHTML = ''; // Clear all appended elements
//             } else {
//                 updateSelectedSeats(selectedSeats);
//             }
//         }
//     });
// }

// function updateSelectedSeats(selectedSeats) {
//     selectedContainer.innerHTML = ''; // Clear existing elements
//     selectedSeats.forEach(selectedSeatName => {
//         const h4 = document.createElement('h4');
//         h4.innerText = selectedSeatName;
//         const coachType = document.createElement('h4');
//         coachType.innerText = "Economy ";
//         const displaySeatprice = document.createElement('h4');
//         displaySeatprice.innerText = 550;

//         selectedContainer.append(h4);
//         selectedContainer.append(coachType);
//         selectedContainer.append(displaySeatprice);
//     });
// }


const allBtn = document.getElementsByClassName('seat');
let seatCount = 0;
let totalSeats = 40; // Total number of seats
let priceOfSeat = 0;
const selectedSeats = [];
const selectedContainer = document.getElementById('injected-div');

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        if (!btn.disabled) { // Check if button is not disabled
            if (btn.style.backgroundColor !== 'rgb(29, 209, 0)') { // Check if background color is not #1DD100
                if (seatCount < 4 && totalSeats > 0) { // Check if there are available seats
                    btn.style.backgroundColor = '#1DD100'; // Change background color to #1DD100
                    seatCount += 1;
                    selectedSeats.push(btn.innerText);
                    totalSeats -= 1; // Decrease total seats count
                    priceOfSeat += 550; // Increase total price by the price of the seat
                    document.getElementById("couponField").classList.remove("hidden");
                }
            } else {
                btn.style.backgroundColor = ''; // Remove background color
                seatCount -= 1;
                const index = selectedSeats.indexOf(btn.innerText);
                if (index !== -1) {
                    selectedSeats.splice(index, 1);
                }
                totalSeats += 1; // Increase total seats count
                priceOfSeat -= 550; // Decrease total price by the price of the seat
            }

            document.getElementById('seat-count').innerHTML = seatCount;
            document.getElementById('total-seats').innerHTML = totalSeats;
            document.getElementById('total-price').innerHTML = priceOfSeat; // Update total price display

            for (const otherBtn of allBtn) {
                if (otherBtn !== btn && otherBtn.style.backgroundColor !== 'rgb(29, 209, 0)') {
                    otherBtn.disabled = seatCount === 4 || totalSeats === 0; // Disable buttons if no available seats or maximum seats selected
                }
            }

            // Clear or append elements based on seat selection
            if (seatCount === 0) {
                selectedContainer.innerHTML = ''; // Clear all appended elements
            } else {
                updateSelectedSeats(selectedSeats);
            }
        }
    });
}

// function updateSelectedSeats(selectedSeats) {
//     selectedContainer.innerHTML = ''; // Clear existing elements
//     selectedSeats.forEach(selectedSeatName => {
//         const div=dociment.createElement('div');

//         const h4 = document.createElement('h4');
//         h4.innerText = selectedSeatName;

//         const coachType = document.createElement('h4');
//         coachType.innerText = "Economy ";

//         const displaySeatprice = document.createElement('h4');
//         displaySeatprice.innerText = 550;



//         selectedContainer.append(h4);
//         selectedContainer.append(coachType);
//         selectedContainer.append(displaySeatprice);
        

    
//     });
// }

function updateSelectedSeats(selectedSeats) {
    selectedContainer.innerHTML = ''; // Clear existing elements
    
    selectedSeats.forEach(selectedSeatName => {
        // Create a new div to hold seat information
        const div = document.createElement('div');

        // Create elements for seat information
        const h4 = document.createElement('h4');
        h4.innerText = selectedSeatName;

        const coachType = document.createElement('h4');
        coachType.innerText = "Economy ";

        const displaySeatprice = document.createElement('h4');
        displaySeatprice.innerText = 550;

        // Append seat information elements to the new div
        div.appendChild(h4);
        div.appendChild(coachType);
        div.appendChild(displaySeatprice);
        // div.classList.add('flex');
        // div.classList.add('justify-between, border-b-2, border-dashed, border-lime-500, pb-2');
        div.classList.add('flex', 'justify-between', 'border-b-2', 'border-dashed', 'border-gray-300', 'p-2');


        // Append the new div under selectedContainer
        selectedContainer.appendChild(div);
    });
}





// discount offer

function nakib() {
    // Get the input element by its ID
    const inputElement = document.getElementById('hello');

    // Get the value entered in the input field
    const inputValue = inputElement.value;
    
    // Get the total price
    const totalPriceElement = document.getElementById('total-price');
    const totalDiscountElement = document.getElementById('discount');
    let totalPrice = parseFloat(totalPriceElement.innerText);

    // Check if the input value matches any discount code
    if (inputValue === 'NEW15') {
        // Apply 15% discount
        totalPrice *= 0.85;
        totalDiscountElement.innerText = totalPrice.toFixed(2); // Update the displayed discounted price
        document.getElementById("hidden").classList.remove("hidden");
    } 
    else if (inputValue === 'Couple 20') {
        // Apply 20% discount
        totalPrice *= 0.80;
        totalDiscountElement.innerText = totalPrice.toFixed(2); // Update the displayed discounted price
        document.getElementById("hidden").classList.remove("hidden");
    } else {
        // Reset the discount if no valid code is entered
        totalDiscountElement.innerText = totalPrice.toFixed(2);
    }
}



// popup fucti
// function openModal() {
//     var text = document.getElementById("text").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;

//     // Check if all fields are filled
//     if (text !== "" && email !== "" && phone !== "") {
//         document.getElementById("myModal").style.display = "block";
//     }
// }

// function closeModal() {
//     document.getElementById("myModal").style.display = "none";
// }