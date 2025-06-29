const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());
/// Ostatak kôda
const mongoose = require('mongoose');
//Spajanje na bazu




const { Schema } = mongoose;
const putShema = new Schema({
    name: { type: String, required: true },
    timeTravel: { type: Date, required: true },
    budget: { type: Number, required: true },
    people: { type: Number, required: true },
    location: { type: String, required: true },
    transport: { type: String, required: true },
    idKorisnika:{ type:String }
});

const Put = mongoose.model("Put", putShema, "putevi");

module.exports = Put;