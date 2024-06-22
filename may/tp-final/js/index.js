// carga dinamica de peliculas usando la api

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

async function consultarApi() {
    try {
        const URLSERVER = 'https://api.themoviedb.org/3';
        const urlTopRated = URLSERVER + "/movie/top_rated?language=es"
       //const urlPopular= URLSERVER + "/movie/popular?language=es"
        const movies = await api(urlTopRated);
      //  console.log(movies)
        return movies;
    } catch (error) {
        console.error('Hubo un error al obtener las películas:', error);
    }
}
// devuelve la BD local usada solo para pruebas en frontEnd
/*async function consultarBDlocal(){
    return datos;
}*/

// arma el html a mostrar
const render = (movie) => {

    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    let html = `<div class="box-1">
    
    <div class="content">
        <img src="${baseUrl + movie.poster_path}" alt="">

        <h3>"${movie.title}"</h3>

        <p>
        "${movie.overview}"

        </p>

    </div>

</div>`
    return html;
}
// consulta la api,obtiene el array de 20 peliculas mejores puntuadas y las muestra
(async () => {
    try {
        let movies = await consultarApi();
       /*let movies = await consultarBDlocal();*/
        console.log(movies);
        let divPopular = document.querySelector('#contenedorPelis');
        for (let i = 0; i < movies.length; i++) {
            let html = render(movies[i]);
            divPopular.insertAdjacentHTML('beforeend', html)
        }

    } catch (error) {
        console.error('Hubo un error al obtener las películas:', error);
    }
})();

async function consultarApiAccion() {
    try {
        //"https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key="+apiKey+"&language=es-ES&page=1"
        const URLSERVER = 'https://api.themoviedb.org/3';
        const urlAccion = URLSERVER + "/discover/movie?with_genres=28&language=es"
        const movies = await api(urlAccion);
        return movies;
    } catch (error) {
        console.error('Hubo un error al obtener las películas:', error);
    }
}
// consulta la api,obtiene el array de 20 peliculas  de accion y las muestra
(async () => {
    try {
        let movies = await consultarApiAccion();
       // console.log(movies);
        let divAccion = document.querySelector('#contenedorPelisAccion');
        for (let i = 0; i < movies.length; i++) {
            let html = render(movies[i]);
            divAccion.insertAdjacentHTML('beforeend', html)
        }

    } catch (error) {
        console.error('Hubo un error al obtener las películas:', error);
    }
})();


async function consultarEstrenos() {
    try {
        //https://api.themoviedb.org/3/movie/now_playing?api_key=TU_API_KEY
        const URLSERVER = 'https://api.themoviedb.org/3';
        const urlEstrenos = URLSERVER + "/movie/now_playing?language=es"
        const movies = await api(urlEstrenos);
        return movies;
    } catch (error) {
        console.error('Hubo un error al obtener las películas:', error);
    }
}
// consulta la api,obtiene el array de 20 peliculas estreno y las muestra
(async () => {
    try {
        let movies = await consultarEstrenos();
        //console.log(movies);
        let divEstrenos = document.querySelector('#contenedorEstrenos');
        for (let i = 0; i < movies.length; i++) {
            let html = render(movies[i]);
            divEstrenos.insertAdjacentHTML('beforeend', html)
        }

    } catch (error) {
        console.error('Hubo un error al obtener las películas:', error);
    }
})();