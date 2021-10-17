"Use Strict";

let number = Math.floor(Math.random() * 20+1);
console.log(number);




document.getElementById("form").addEventListener('submit', event => {
    event.preventDefault();
    
    let inputNumber = document.getElementById('inputNumber').value;
    console.log(inputNumber);

    compareNumber(inputNumber);

});

function compareNumber(inputNumber){
    if(inputNumber>20 || inputNumber<1){
        console.log('Your guess is undefined')
        let message = `<p>Your number is undefined</p>`
        document.getElementById('message').innerHTML = message;
    }
    else if(inputNumber<number){
        console.log('Your number is too low')
        let message = `<p>Your number is too low</p>`
        document.getElementById('message').innerHTML = message;
    }
    else if(inputNumber>number){
        console.log('Your number is too high')
        let message = `<p>Your number is too high</p>`
        document.getElementById('message').innerHTML = message;
    }
    else if(inputNumber==number){
        console.log('you guessed the mystery number')
        let message = `<p>you guessed the mystery number</p>`
        document.getElementById('message').innerHTML = message;
    }
    else{
        console.log('Your guess is undefined')
        let message = `<p>Your guess is undefined</p>`
        document.getElementById('message').innerHTML = message;
    }
};

function printAnswer(inputNumber) {
    let message = `<p>The order for the customer ${order.name} is the following:  ${order.order}. The customer may be notified by email: ${order.email}</p>`
    document.getElementById('message').innerHTML = message;
}