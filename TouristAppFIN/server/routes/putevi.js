const express = require("express");



const router=express.Router();
const provjeriToken = require('./middlewares/auth');

const Put = require('../models/TripModel');


router.post('/dodaj', provjeriToken, async(req, res) => {
    console.log(req.body);
    console.log(req.korisnik.samoKorisnikID);
    

    const noviPut=new Put({...req.body, idKorisnika:req.korisnik.samoKorisnikID});  // ukljuciti u podatak samo kasnije dodat korsnik id
    
    await noviPut.save();
    res.status(201).send("Stvoren je novi put");
    // Logika stvaranja novog korisnika

  });

router.delete('/:id', async (req, res) => {
    try {
      const p = await Put.findByIdAndDelete(req.params.id);
      if (!p) {
        return res.status(404).send('Putovanje ne postoji');
      }
      res.send('Putovannje izbrisan');
    } catch (error) {
      res.status(500).send(error.message);
    }
  })// RADI!!!!!!
  
  router.get("/", provjeriToken, async (req, res) => {
    const rezultat = await Put.find({idKorisnika:req.korisnik.samoKorisnikID})
    if (rezultat.length > 0) { res.status(200).json(rezultat) }
    else res.status(200).json([]);
    
})
router.get('/:id', async (req, res) => {
    const p = req.params.id 
    try {
      const putovanje = await Put.findById(p);
      if (!putovanje) {
        return res.status(404).send('Korisnik ne postoji');
      }
      res.json(putovanje);
    } catch (error) {
      res.status(500).send(error.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
      const put = await Put.findByIdAndUpdate(req.params.id, req.body, { new: true });
      //console.log(put);
      if (!put) {
        return res.status(404).send('Korisnik ne postoji');
      }
      res.json(put);
    } catch (error) {
      res.status(500).send(error.message);
    }
    
});
  
module.exports = router

