const URL_API = 'https://rickandmortyapi.com/api/character'
const container = document.querySelector('.contenedor')
const body = document.querySelector('body')
const select = document.querySelector('#selector')
const btnDetails = document.querySelector('#buttonDetails')
const form = document.querySelector('form')
const searchBar = document.getElementById('search-bar')
console.log(searchBar.value);

//      ------GENERAL--------
// Get Random page for landing page
const showCharacter = () =>{
    const page = Math.floor(Math.random()*43)
    fetch(`${URL_API}/?page=${page.toString()}`)
    .then((response) => response.json())
    .then((data) => showData(data.results))
}
showCharacter();

//        MOSTRAR DATA
const showData = (array) =>{
    let card = ``
    for (const element of array) {
        // console.log(element);
        const {name, image, gender, species, status, id} = element
        
        card += `
        <div class="col-md-6 col-xl-4">
            <div class="tarjeta">
                <h2>${name}</h2>
                <img class="img-fluid" src="${image}">
                <p><b>Gender:</b> ${gender}</p>
                
                <p class="genero ${status} "><b>Status:</b> ${status} </p>
                
                <button onclick="callDetails(${id})" type="button" class="btn btn-primary boton">Details</button>
            </div>
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
            .then((data) => showData (data.results))
            console.log('Male');
            break;
        case 2:
            fetch(`${URL_API}/?gender=female`)
            .then((response) => response.json())
            .then((data) => showData (data.results))
            console.log('Female');
            break;
        case 3:
            fetch(`${URL_API}/?gender=unknown`)
            .then((response) => response.json())
            .then((data) => showData (data.results))
            console.log('Unknown');
            break;
        case 4:
            fetch(`${URL_API}/?gender=genderless`)
            .then((response) => response.json())
            .then((data) => showData (data.results))
            console.log('Genderless');
            break;
    
        default:
            break;
    }
}



//          MOSTRAR DETALLES
const callDetails = (id) =>{
    fetch(`${URL_API}/${id}`)
    .then((response) => response.json())
    .then((data) => {
        showCard(data)
        console.log(data);
    })
}

const showCard = (info)=>{
    let card = ``
    const {name, image, gender, species, status, origin, location, created} = info
    card = `
        <div class="">
            <div class="detalles row">
                <img class="img-fluid col-lg-6" src="${image}">
                <div class=" cont-detalles col-lg-6 pt-lg-0 pt-sm-4">
                    <h2><b>Name:</b> ${name}</h2>
                    <p><b>Gender:</b> ${gender}</p>
                    <p><b>Species:</b> ${species}</p>
                    <p><b>Status:</b> ${status}</p>
                    <p><b>Origin:</b> ${origin.name}</p>
                    <p><b>Location:</b> ${location.name}</p>
                    <p><b>Created:</b> ${created}</p>

                </div>
            </div>
            <button onclick="showCharacter()" type="button" class="btn btn-primary boton col-4">Go Back</button>
        </div>
    `
    container.innerHTML = card
}

//          FILTRAR PERSONAJES
// https://rickandmortyapi.com/api/character/?name=rick

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const filterCharacter = () =>{
        const search = searchBar.value;
        fetch(`${URL_API}/?name=${search}`)
        .then((response) => response.json())
        .then((data) => showData(data.results))
        form.reset()
    }
    
    filterCharacter()
    
})


