
let baseurl = 'http://www.omdbapi.com/?apikey=fbcecdcb&'

window.onload = function(){
    console.log('loaded');

    //Get value from input
    //...
    //build url
    let url = baseurl + 't=loki&y=2021'

    getData(url).then(result => {
        console.log(result)
    })

}

async function getData(url){
    let response = await fetch(url);
    return await response.json();
}

