function getPhone(){
    fetch(`https://api-mobilespecs.azharimm.site/v2/samsung_galaxy_s20_fe_5g-10377`)
    .then(response => response.json())
    .then(data => {
        console.log("succes",data);
        console.log('Phone:', data.data.brand, data.data.phone_name);
            
        let containerInfo = document.getElementById("phoneDisplay");
        let htmlString = 
                `<div class="col-md-4">
                    <img src="${data.data.thumbnail}" alt="...">
                </div>
                <div class="col-md-8">
                    <div>
                        <h2>${data.data.brand}</h2>
                        <p>${data.data.phone_name}</p>
                    </div>
                </div>`;
        
        containerInfo.insertAdjacentHTML('beforeend', htmlString);

    });
}

getPhone();
