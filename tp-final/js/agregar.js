
let peliculas=[];
let numeroVector = 0;
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8',

    }
};
async function api(url) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
        }
        const data = await response.json();
        
        return data.results;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
async function buscarPelicula(nombre) {
    try {
        //https://api.themoviedb.org/3/search/movie?query=The+Dark+Knight&language=en-US&api_key=YOUR_API_KEY
        //"https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key="+apiKey+"&language=es-ES&page=1"
        const URLSERVER = 'https://api.themoviedb.org/3';
        const urlBuscar = URLSERVER + "/search/movie?query="+nombre+"&language=es-ES"
        //const urlAccion = URLSERVER + "/discover/movie?with_genres=28&language=es"
        const movies = await api(urlBuscar);
        return movies;
    } catch (error) {
        console.error('Hubo un error al obtener las películas:', error);
    }
}
function buscar(){
    let buscar = document.getElementById("inputBuscar");
    
    (async () => {
        try {
            peliculas = await buscarPelicula(buscar.value);
            console.log(peliculas);
            document.querySelector('#contenedorPelisAbuscar').innerHTML = '';
             let divAccion = document.querySelector('#contenedorPelisAbuscar');
            for (let i = 0; i < peliculas.length; i++) {
                let html = render(peliculas[i],i);
                divAccion.insertAdjacentHTML('beforeend', html)
            } 
    
        } catch (error) {
            console.error('Hubo un error al obtener las películas:', error);
        }
    })();
}


// arma el html a mostrar
const render = (movie,numero) => {

    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    let html = `<div class="caja-1">
    
    <div class="content">
        <button  onclick="botonAgregar(${numero})" data-bs-toggle="modal" data-bs-target="#exampleModal">agregar</button>
        <img src="${baseUrl + movie.poster_path}" alt="">

        <h3>"${movie.title}"</h3>

        <p>
        "${movie.overview}"

        </p>

    </div>

</div>`
    return html;
}

function botonAgregar(numero){
   // console.log(peliculas[numero])
   numeroVector = numero;
    const titulo = document.getElementById("exampleModalLabel");
    titulo.textContent = peliculas[numero].title;
    const tapa = document.getElementById("modalTapa");
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    tapa.src = baseUrl + peliculas[numero].poster_path;
    const sinopsis = document.getElementById("modalSinopsis");
    sinopsis.textContent = peliculas[numero].overview;
}
function confirmarAgregar(){
    const pelicula = crearObjeto(peliculas[numeroVector]);
    actualizarPantalla()
    enviarAbd(pelicula)
}
function actualizarPantalla(){
    peliculas.splice(numeroVector, 1);
    try {
        document.querySelector('#contenedorPelisAbuscar').innerHTML = '';
         let divAccion = document.querySelector('#contenedorPelisAbuscar');
        for (let i = 0; i < peliculas.length; i++) {
            let html = render(peliculas[i],i);
            divAccion.insertAdjacentHTML('beforeend', html)
        } 

    } catch (error) {
        console.error('Hubo un error al obtener las películas:', error);
    }
}
function crearObjeto(pelicula){
    const nuevoObjeto = {
        "id":pelicula.id,
        "genre_ids":pelicula.genre_ids,
        "poster_path": pelicula.poster_path,
        "title": pelicula.title,
        "overview": pelicula.overview,
        "vote_average":pelicula.vote_average,
    };
    return nuevoObjeto;
}
function enviarAbd(pelicula){
    // en la bd hay que verificar que no se repita usando el id como clave primaria
    datos.push(pelicula);
    console.log(datos);
}
