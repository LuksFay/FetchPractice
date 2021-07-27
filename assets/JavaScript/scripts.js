const contenido = document.querySelector('#contenido');
const boton = document.querySelector('#boton');



// esta funcion se encarga de traer un conjunto de datos guardados en un medio exerno, ya sea otro archivo de la computadora o simplemente en internet.
//en este caso fue dentro de esta carpeta, lo primero es transcribir los datos diciendoles que son un archivo json en este caso.
//luego trabajamos con esos datos, en este caso pintamos en consola los datos de ese array externo


function traer(){
    fetch('assets/JavaScript/tabla.json')
    .then( respuesta => respuesta.json())
    .then( datos => {
        tabla(datos)
    })     
}
function tabla(datos){
    console.log(datos)
    contenido.innerHTML = ''
    for(let valor of datos){
        contenido.innerHTML += `
        <tr>
            <th scope="row">${valor.id}</th>
            <td>${valor.nombre}</td>
            <td>${valor.email }</td>
            <td>${valor.estado ? "Activo" : "Eliminado"}</td>
        </tr>`
        if( valor.id === 4 ){
            break
        }
    }
}

// esta interaccion de aca es simplemente un boton 

    boton.addEventListener('click', () => {
        traer();
    })


                // <tr>
                //     <th scope="row">1</th>
                //     <td>Mark</td>
                //     <td>Otto</td>
                //     <td>@mdo</td>
                // </tr>
