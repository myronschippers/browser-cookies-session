const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

// App Set //
const PORT = process.env.PORT || 5000;
const app = express();

//
// EXPRESS APPLICATION MIDDLEWARE
// ------------------------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SETUP of cookie session middleware
app.use(cookieSession({
  name: 'session',
  keys: ['session'],
  // how much time till expires
  maxAge: 2 * 60 * 1000, // 2 mins
}))

//
// API ROUTES
// ------------------------------------------------------------

// save the creature to cookie session
app.post('/api/creature', (req, res) => {
    // save creature
    req.session.favoriteCreature = req.body.favoriteCreature;

    res.sendStatus(200);
});

// retrieve the creature stored with cookie session
app.get('/api/creature', (req, res) => {
    // get saved cookie information
    req.session.favoriteCreature = req.session && req.session.favoriteCreature || null;

    const {
      favoriteCreature
    } = req.session;

    res.send({
      favoriteCreature: favoriteCreature
    });
});

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
