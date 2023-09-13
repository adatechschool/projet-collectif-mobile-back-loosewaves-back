const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
//import des routes
const routeSurfSpots = require('./routes/surfspots')

mongoose.connect('mongodb://127.0.0.1:27017/LooseWaves',

   {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(() => console.log('Connexion à MongoDB réussie !'))
   .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
});
app.use('/surfspots', routeSurfSpots)


app.post('/api/stuff', (req, res, next) => {
   console.log(req.body);
   res.status(201).json({
      message: 'Objet créé !'
   });
});

module.exports = app;