const express = require("express");

const app = express();

app.use(express.json());
/// Ostatak kôda
const mongoose = require('mongoose');
//Spajanje na bazu


const { Schema } = mongoose;

const korisnikShema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true, unique:true },
    password:{ type: String, required: true },
  });

const Korisnik = mongoose.model("Korisnik", korisnikShema, "korisnici");

module.exports = Korisnik;