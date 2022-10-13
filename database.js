
const mongoose = require("mongoose")
const connection = () => {
    mongoose.connect(process.env.URI_MONGODB).then(()=>console.log("Conectado")).catch(err => console.log(err))
}
module.exports = connection