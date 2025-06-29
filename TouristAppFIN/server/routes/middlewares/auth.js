const jwt = require('jsonwebtoken');

const provjeriToken = (req, res, next) => {
    const authZaglavlje = req.headers['authorization'];
    if (!authZaglavlje) return res.status(403).send('Ne postoji autorizacijsko zaglavlje');
   
    const token = authZaglavlje.split(' ')[1];
    if (!token) return res.status(403).send('Bearer token nije pronađen');
   
    try {
      const dekodiraniToken = jwt.verify(token, 'tajniKljuc');
      req.korisnik = dekodiraniToken;
    } catch (err) {
      return res.status(401).send('Neispravni Token');
    }
    return next();
  };

module.exports = provjeriToken;