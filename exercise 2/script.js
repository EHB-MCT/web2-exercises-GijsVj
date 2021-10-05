
let list, pokemon = []

function getData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            return response.json();
        }).then(data => {
            list = data.results;
            for (let element of list) {
                fetch(element.url).then(response => {
                    return response.json();
                }).then(data => {
                    pokemon.push(data)
                })
            }
        })
}

window.onload = function() {

    getData();

    setTimeout(buildlist, 3000);

    function buildlist() {
        console.log(pokemon);
        console.log(list);
    }
}