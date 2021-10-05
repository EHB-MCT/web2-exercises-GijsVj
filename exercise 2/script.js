"Use Strict";

let pokemon = [];
let list = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
.then(response => {
    return response.json();
}).then(data => {
    list = data.response;
    for (let element of list){
        fetch(element.url).then(response => {
            return response.json();
        }).then(data => {
            pokemon.push(data)
        })
    }
})
