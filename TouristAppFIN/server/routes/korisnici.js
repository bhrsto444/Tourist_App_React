require("dotenv").config();

const express = require("express");


/// Ostatak kôda
//const mongoose = require('mongoose');
//Spajanje na bazu
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router=express.Router();
const provjeriToken = require('./middlewares/auth');

const TAJNI_KLJUC = process.env.TAJNI_KLJUC;
const Korisnik = require('../models/UserModel');
const Put = require('../models/TripModel');

const saltRunde = 10;

router.post('/', async (req, res) => {
  try {
    const hashLozinka = await bcrypt.hash(req.body.password, saltRunde);
    
    const exist=await Korisnik.findOne({ username: req.body.username })
    const exist2=await Korisnik.findOne({ email: req.body.email })
    if(exist){
      res.status(401).send('Username already exists');
    }
    else if(exist2){
      res.status(401).send('You have account with this email');
    }
    else if(req.body.password.length<3){
      res.status(401).send('Password needs to have at least 3 characters');
    }
    else{
      const noviKorisnik = new Korisnik({ ...req.body, password: hashLozinka });
      await noviKorisnik.save();
      /*res.status(201).send('Korisnik uspješno registriran');*/
      const token = jwt.sign(
        { idKorisnika: noviKorisnik.username, samoKorisnikID: noviKorisnik._id },
        TAJNI_KLJUC,
        { expiresIn: '1h' }
      );

      // 
      res.status(201).json({ token, message: 'Korisnik uspješno registriran' });
      
    }
    
    
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post('/prijava', async (req, res) => {
  try {
    const korisnikBaza = await Korisnik.findOne({ username: req.body.username });
    console.log(req.body.username, req.body.password)
    if (korisnikBaza && await bcrypt.compare(req.body.password, korisnikBaza.password)) {
      const token = jwt.sign({ idKorisnika: korisnikBaza.username, samoKorisnikID:korisnikBaza._id}, TAJNI_KLJUC, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).send('Neispravni podaci za prijavu');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/zasticena-ruta', provjeriToken, (req, res) => {
  console.log(req.korisnik)
  res.send('Odgovor iz zasticene rute')
});


router.get("/", async (req, res) => {
  const rezultat = await Korisnik.find({})
  if (rezultat.length === 1) { res.status(200).json(rezultat) }
  else res.status(200).json([]);
});

router.get('/:id', async (req, res) => {
  const k = req.params.id
  try {
    const korisnik = await Put.findById(k);
    if (!korisnik) {
      return res.status(404).send('Korisnik ne postoji');
    }
    res.json(korisnik);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router