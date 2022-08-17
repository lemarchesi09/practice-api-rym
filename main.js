const URL_API = 'https://rickandmortyapi.com/api/character'

const container = document.querySelector('.container')


fetch(URL_API)
    .then((response) => response.json())
    .then((data) => showData(data.results))

const showData = (array) =>{
    let card = ``
    for (const element of array) {
        console.log(element);
        const {name, image, gender, species, status} = element
        
        card += `
            <div class="tarjeta">
                <h2>${name}</h2>
                <img src="${image}">
                <p><b>Gender:</b> ${gender}</p>
                <p><b>Species:</b> ${species}</p>
                <p><b>Status:</b> ${status}</p>
                <p><b>Location:</b> ${element.location.name}</p>
            
            </div>
        `
    }
    container.innerHTML = card
}