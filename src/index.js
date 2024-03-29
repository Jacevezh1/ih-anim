
// 1. IMPORTACIONES

const express = require("express")
const app = express()

// Para acceder a las carpetas
const path = require('path')

require("dotenv").config()

const connectDB = require('./config/db')

const bodyParser = require('body-parser') // Leer datos enviados x clinete por metodo POST



// 2. MIDLEWERS (Es una funcion que se ejecuta despues de recibir una peticion y antes de dar un respuesta)

// Trabajar con archivos estaticos (Html, imagenes)
app.use(express.static(path.join(__dirname, 'public')))

// Utilizar el body-paser
app.use(bodyParser.urlencoded({extended: true}))


// Configuraciones
app.set('views', path.join(__dirname, 'views')) // De donde saco las vistas
app.set('view engine', 'hbs') // Para utilizar el motor de vistas (hbs)



connectDB();


// 3. RUTAS


app.get('/', (req, res) => {

    res.render('index')

})


// Animes
app.use('/animes', require('./routes/animes.router'))





// 4. SERVIDOR


app.listen(process.env.PORT, () => {

    console.log(`Server on port: http://localhost: ${process.env.PORT}`)

})

