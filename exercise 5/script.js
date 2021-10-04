"Use Strict";


window.onload = function () {
    console.log("loaded");

    document.getElementById("form").addEventListener('submit', event => {
        event.preventDefault();
        let order = {
            name: "",
            email: "",
            order: ""
        }
        order.name = document.getElementById('nameInput').value;
        order.email = document.getElementById('emailInput').value;
        order.order = document.getElementById('orderInput').value;


        printOrder(order);

        let dishes = [];
        dishes.push({
            id: '1',
            name: 'Burger',
            price: '8'
        });
        dishes.push({
            id: '2',
            name: 'Fries',
            price: '3'
        });
        dishes.push({
            id: '3',
            name: 'Frikandel',
            price: '5'
        });

    });
};

function printOrder(order) {
    let message = `<p>The order for the customer ${order.name} is the following:  ${order.order}. The customer may be notified by email: ${order.email}</p>`
    document.getElementById('message').innerHTML = message;
}