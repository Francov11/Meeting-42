/*const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const { router } = require("./routes.js");

async function main(){
    dotenv.config();
    const port = ;
    const db = ;

    const app = express();

    try{
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res)=> {
            console.log('Conexión a la base de datos establecida...') });
        } catch (err){
            handleError(err);
        }
    
    app.use(router);
    app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
}

main();
*/