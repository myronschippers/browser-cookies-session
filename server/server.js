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

// create cookie session to be used on the `req` of he API routes
app.use(cookieSession({
    name: 'session',
    keys: ['session'],
    // how much time till cookie expires
    maxAge: 2 * 60 * 1000 // 2 mins
}));

//
// API ROUTES
// ------------------------------------------------------------

// save the creature to cookie session
app.post('/api/creature', (req, res) => {
    req.session.fantasticCreature = req.body.fantasticCreature;

    res.sendStatus(200);
});

// retrieve the creature stored with cookie session
app.get('/api/creature', (req,res) => {
    // if there is a call to get creature re-save creature to coockieSession otherwise set session to null 
    req.session.fantasticCreature = req.session && req.session.fantasticCreature || null;

    const {
        fantasticCreature
    } = req.session;

    res.send({
      fantasticCreature
    });
});

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
