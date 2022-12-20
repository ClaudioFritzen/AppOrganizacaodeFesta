const mongoose = require("mongoose");


const dotenv = require("dotenv");

dotenv.config({ path: "../config.env"});

async function main() {
    try {

        mongoose.set('strictQuery', true);

        await mongoose.connect("mongodb+srv://ClaudioFritzen:ZKLBVQfeASM5XbXE@cluster0.lwdb9ap.mongodb.net/?retryWrites=true&w=majority"            
        )
        console.log("Estamos conectado ao banco de dados");
        
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
    
}

module.exports = main;