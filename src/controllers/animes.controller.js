// METODOS: GET, POST, PUT, DETELE // En vez de tenerlos en mi index.js


// Va y obtiene la carpeta de modelos de anime
const Anime = require('./../models/Anime')




// 2. FUNCION PARA OBTENER ANIMES Y RENDERIZAR

const getAnimes = async(req, res) => {

    // Obtener los datos de los animes de la base de datos
    const animes = await Anime.find({})

    // Renderiza los datos (la propiedad para hbs)
    res.render('allAnimes', { animes }) 


}



const putAnimes = async(req, res) => {

    // Destructuracion de objetos, de ID, declarar variables del objeto (Parametros de URL)
    const {id} = req.params // Jalar el id de base de datos para poder modificarlo

    // Aqui guardamos los datos del formulario body-parser (Modificar img)
    const { img } = req.body

    // Ir a la base de datos
    // Actualizar la imagen
     
    // id: me ayuda a encontrat el anime, img a actualizar, new true para que me genera una nueva
    await Anime.findByIdAndUpdate(id, {img}, {new: true})

    // Mandarme a una direccion nueva, para mostarte de nuevo todos los animes ya actualizados.
    res.redirect('/animes')


}





// 3. EXPORTAR

// En un objeto para poder escalarlo, y aplicar distintos metodos (POST, GET, DELETE, etc....)
// Para poder exportar muchas a la vez
module.exports = { getAnimes, putAnimes }







