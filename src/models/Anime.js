
// 1 IMPORTACIONES
const mongoose = require("mongoose")
const Schema = mongoose.Schema



// 2. SCHEMA


const animeSchema = new Schema({

    name: String, 
    description: String,
    rating: String, 
    episodio: Number,
    categoria: String, 
    studio: String, 
    img: String

}, {timestamps: true})







// 3. MODELO


const Anime = mongoose.model('Anime', animeSchema)



// 4. EXPORT


module.exports = Anime
