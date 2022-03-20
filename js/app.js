const contenedor = document.querySelector('.contenedor');

/*function pintarTarjetas(listado) {
    // desarrollar esta funcion
    listado.forEach(item => {
        let templateTarjeta = `
        <div class="item">
        <img src=${item.imgUrl}>
        <h2>${item.titulo}</h2>
          <p>${item.descripcion}</p>
        </div>
        `
        contenedor.innerHTML += templateTarjeta;
    });
};

pintarTarjetas(listadoNoticias);
let nacional = document.querySelector(".contenedor")
if (listadoNoticias.tipoNacional) {
    nacional.ClassList.add("nacional")


}*/


function pintarTarjetas(listado) {

    // Localizamos el padre seleccionandolo por su clase
    padre = document.querySelector(".contenedor");

    // Recorremos el listado de noticias
    listado.forEach((item) => {

        // Por cada uno, creamos un elemento DIV y le agregamos la clase "item"
        let div = document.createElement('div');
        div.setAttribute('class', 'item');

        // Creamos la imagen y le damos el atributo src con el link
        let img = document.createElement('img');
        img.setAttribute('src', item.imgUrl);

        // Creamos el subtitulo y le damos el texto del titulo
        let h2 = document.createElement('h2');
        h2.textContent = item.titulo

        // Creamos el parrafo y le damos el texto de la descripcion
        let parrafo = document.createElement('p');
        parrafo.textContent = item.descripcion;

        // Creamos el parrafo y le damos el texto de la descripcion
        let esNacional = item.tipoNacional;
        let nacionalidad = document.createElement('p');

        if (!esNacional) {
            nacionalidad.textContent = "WORLD NEWS";
            nacionalidad.setAttribute('class', 'worldnewsbutton');
        } else {
            nacionalidad.textContent = "Argentina";
            nacionalidad.setAttribute('class', 'argnewsbutton');
        }

        // Añadimos los elementos creados al div
        div.appendChild(img);
        div.appendChild(nacionalidad);
        div.appendChild(h2);
        div.appendChild(parrafo);

        // Finalmente añadimos el div al padre
        padre.appendChild(div);
    });


}

/* 
    Creamos un nuevo elemento
let literals = document.createElement('p');

Agregamos el texto con el template literal
literals.appendChild(document.createTextNode(`Esto es un template ${url} literal`));

Agregamos el elemento nuevo al nodo padre
div.appendChild(literals); */



pintarTarjetas(noticias);
const body = document.querySelector('body');
const icono = document.querySelector('#icono');



/* ------------------- funcionalidad para cambiar el tema ------------------- */
function alternarTema() {
    // cambiamos el tema y nos guardamos si se agregó o no esa clase
    const temaOscuro = body.classList.toggle('dark');
    // chequeamos si es el tema temaOscuro, ponemos un icono de sol
    if (temaOscuro) {
        icono.innerText = '🌞'
    } else {
        icono.innerText = '🌛'
    }
}