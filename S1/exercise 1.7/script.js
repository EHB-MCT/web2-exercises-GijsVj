"Use Strict";

let totalPrice = 0;

let dishes = [];
dishes.push({
    id: '1',
    name: 'Burger',
    price: '8'
} , {
    id: '2',
    name: 'Fries',
    price: '3'
}, {
    id: '3',
    name: 'Frikandel',
    price: '5'
});

window.onload = function () {
    console.log("loaded");

    dishes.forEach(element => {
       let radio = `<input type="checkbox" name="burger" id="${element.name}">
       <label for="${element.id}">${element.name}</label>`;
       document.getElementById('radio').insertAdjacentHTML("afterend", radio);
    });

    

    document.getElementById("form").addEventListener('submit', event => {
        event.preventDefault();
       

        printOrder();

        


    });

    document.getElementById("calculateButton").addEventListener('submit', event => {
        event.preventDefault();

        calculatePrice();
    })
};


function printOrder() {
    let orderList = {
        name: "",
        email: "",
        order: []
    }
    orderList.name = document.getElementById('nameInput').value;
    orderList.email = document.getElementById('emailInput').value;

    dishes.forEach(element => {
        let check = document.getElementById(element.name).checked;
        if (check) {
            orderList.order.push(element.name);
        }
        console.log(orderList);

    });
    let message = `<p>The order for the customer ${orderList.name} is the following:  ${orderList.order}. The customer may be notified by email: ${orderList.email}</p>`
    document.getElementById('message').innerHTML = message;
};

function calculatePrice() {
    totalPrice = 0;
    dishes.forEach(element => {
        let check = document.getElementById(element.name).checked;
        if (check) {
            totalPrice = totalPrice+element.price;
        }
    }); 
    let messagePrice = `<p>The price is $${totalPrice}</p>`;
    document.getElementById("messagePrice").innerHTML = messagePrice;
    console.log(messagePrice);
}