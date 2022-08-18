const URL_API = 'https://rickandmortyapi.com/api/character'
const container = document.querySelector('.container')
const select = document.querySelector('#selector')

//      ------GENERAL--------
const showCharacter = () =>{
    fetch(URL_API)
    .then((response) => response.json())
    .then((data) => showData(data.results))
}
showCharacter();

//        MOSTRAR DATA
const showData = (array) =>{
    let card = ``
    for (const element of array) {
        // console.log(element);
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

//      ------SELECT------
select.addEventListener('change', (e) => {
    e.preventDefault()
})
//          FILTRAR POR GENERO
const seleccionar = ()=>{
    console.log();
    switch (select.selectedIndex) {
        case 1:

            fetch(`${URL_API}/?gender=male`)
            .then((response) => response.json())
            .then((data) => mostrarGenero (data.results))
            console.log('Male');
            break;
        case 2:
            fetch(`${URL_API}/?gender=female`)
            .then((response) => response.json())
            .then((data) => mostrarGenero (data.results))
            console.log('Female');
            break;
        case 3:
            fetch(`${URL_API}/?gender=unknown`)
            .then((response) => response.json())
            .then((data) => mostrarGenero (data.results))
            console.log('Unknown');
            break;
        case 4:
            fetch(`${URL_API}/?gender=genderless`)
            .then((response) => response.json())
            .then((data) => mostrarGenero (data.results))
            console.log('Genderless');
            break;
    
        default:
            break;
    }
}
//          ITERAR ELEMENTO
const mostrarGenero = (array) =>{
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