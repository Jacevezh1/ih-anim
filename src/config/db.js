const mongoose = require("mongoose")

const connectDB = async() => {

    await mongoose.connect(process.env.MONGODB)
    console.log('Conectado a base de datos')
}


module.exports = connectDB