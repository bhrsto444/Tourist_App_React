require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());
/// Ostatak kôda
const mongoose = require('mongoose');
//Spajanje na bazu
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
////////////////////////////////////////
const logging=require('./routes/middlewares/loggingMidd');


app.use(logging);
/////ODODAVANJE RUTA
const userRoute=require('./routes/korisnici');
const tripRoute=require('./routes/putevi');
app.use('/korisnici',userRoute);
app.use('/putevi',tripRoute);

//ENV 
const PORT = process.env.PORT || 3000;
const ADRESA_BAZE = process.env.ADRESA_BAZE;




mongoose.connect(ADRESA_BAZE);//bazaPutovanja
const db = mongoose.connection;

// Upravljanje događajima
db.on('error', (error) => {
    console.error('Greška pri spajanju:', error);
});
db.once('open', function () {
    console.log('Spojeni smo na MongoDB bazu');
});






app.listen(PORT, ()=>console.log(`Server slusa port ${PORT}`));


////