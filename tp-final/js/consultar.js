// array donde se guardan las peliculas a mostrar
let peliculas=[];

// Función para actualizar el texto del botón con la opción seleccionada
function seleccionarOpcion(opcionSeleccionada) {
    document.getElementById('dropdownMenuButton').textContent = opcionSeleccionada;
}

// Event listener para capturar cuando se selecciona una opción del dropdown
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function () {
        // Obtener el texto de la opción seleccionada
        var opcionSeleccionada = this.textContent.trim();
        // Actualizar el texto del botón con la opción seleccionada
        seleccionarOpcion(opcionSeleccionada);
    });
});
// fin opcion seleccionada

// funcion que se activa al presionar consultar
function buscar() {
    // limpia la pantalla y vacia el array de peliculas
    document.querySelector('#contenedorPelisAbuscar').innerHTML = '';
    peliculas=[];

    //obtiene la opcion elegida y valida 
    let opcion = document.getElementById('dropdownMenuButton').textContent.trim();
    let inputBuscar = document.getElementById("inputBuscar");
    let buscar = validar(opcion, inputBuscar.value);

    if (isNaN(buscar) && opcion === "Id") {
        alert("Si elige la opción 'ID', debe ingresar un número válido.");
    } else {
        switch (opcion) {
            case "Id":
                //console.log(buscarPeliculaPorId(buscar));
                buscarEnBdPorId(buscar);
                break;
            case "Nombre":
                //console.log(buscarPeliculaPorNombre(buscar));
                buscarEnBdPorNombre(buscar);
                break;

            default:
                console.log("opcion invalida");
                break;
        }
        
    }
}

function validar(opcion, buscar) {
    if (opcion === "Id") {
        // parseInt devuelve NaN si no puede convertir el valor a un número entero
        buscar = parseInt(buscar);
    }
    return buscar;
}

// busca pelicula en el array
function buscarPeliculaPorId(id) {

    // Recorremos el array de datos
    for (let i = 0; i < datos.length; i++) {
        // Comparamos el id del elemento actual con el id buscado
        if (datos[i].id === id) {
            return datos[i]; // Devolvemos el objeto de la película si encontramos el id
        }
    }
    // Si no se encuentra ninguna película con ese id, devolvemos null
    return null;


}
// busca pelicula en el array
function buscarPeliculaPorNombre(nombre) {
    // Convertimos el nombre buscado a minúsculas para comparar sin considerar mayúsculas o minúsculas
    const nombreLower = nombre.toLowerCase();

    // Recorremos el array de datos
    for (let i = 0; i < datos.length; i++) {
        // Convertimos el título de la película actual a minúsculas
        const tituloLower = datos[i].title.toLowerCase();

        // Comparamos si el título convertido coincide con el nombre buscado
        if (tituloLower.includes(nombreLower)) {
            return datos[i]; // Devolvemos el objeto de la película si encontramos el nombre
        }
    }

    // Si no se encuentra ninguna película con ese nombre, devolvemos null
    return null;
}

function buscarEnBdPorId(buscar){
    (async () => {
        try {
            //peliculas = await buscarPelicula(buscar.value);
            let pelicula = buscarPeliculaPorId(buscar);
            peliculas.push(pelicula)
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
function buscarEnBdPorNombre(buscar){
    (async () => {
        try {
            //peliculas = await buscarPelicula(buscar.value);
            let pelicula = buscarPeliculaPorNombre(buscar);
            peliculas.push(pelicula)
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
// prepara el renderizado de la pelicula
const render = (movie,numero) => {

    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    let html = `<div class="caja-1">
    
    <div class="content">
        <br><br>
        <button  onclick="botonConsultar(${numero})" data-bs-toggle="modal" data-bs-target="#exampleModal">consultar datos</button>
        <img src="${baseUrl + movie.poster_path}" alt="">

        <h3>"${movie.title}"</h3>
    
    </div>

</div>`
    return html;
}
// abre el modal
function botonConsultar(numero){
    // console.log(peliculas[numero])
    numeroVector = numero;
     const titulo = document.getElementById("exampleModalLabel");
     titulo.textContent = peliculas[numero].title;
     const tapa = document.getElementById("modalTapa");
     const baseUrl = 'https://image.tmdb.org/t/p/w500';
     tapa.src = baseUrl + peliculas[numero].poster_path;
     const sinopsis = document.getElementById("modalSinopsis");
     sinopsis.textContent = peliculas[numero].overview;
     const id = document.getElementById("modalId");
     id.textContent = "id: "+peliculas[numero].id;
     const generos = document.getElementById("modalGeneros");
     generos.textContent = "generos: "+peliculas[numero].genre_ids;
     const puntuacion = document.getElementById("modalPuntuacion");
     puntuacion.textContent = "puntuacion: "+peliculas[numero].vote_average;
 }