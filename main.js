const URL_API = 'https://rickandmortyapi.com/api/character'

const container = document.querySelector('.container')

const select = document.querySelector('#selector')


const showCharacter = () =>{
    fetch(URL_API)
    .then((response) => response.json())
    .then((data) => showData(data.results))
}
showCharacter();


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

const showSelected = (array) => {
    array.filter(e => e.gender === 'Male' )
}
select.addEventListener('change', ()=>{
    switch (select.selectedIndex) {
        case 1:
            
            console.log('Male');
            break;
        case 2:
            console.log('Female');
            break;
        case 3:
            console.log('Unknown');
            break;
    
        default:
            break;
    }
})
