const express = require('express');
const bodyParser = require('body-parser');

// App Set //
const PORT = process.env.PORT || 5000;
const app = express();

//
// EXPRESS APPLICATION MIDDLEWARE
// ------------------------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
// API ROUTES
// ------------------------------------------------------------

// save the creature to cookie session
app.post('/api/creature', (req, res) => {
    // save creature

    res.sendStatus(200);
});

// retrieve the creature stored with cookie session
app.get('/api/creature', (req,res) => {
    // if there is a call to get creature re-save creature to cookieSession otherwise set session to null 
    // get saved information

    res.send({
      fantasticCreature: 'CREATURE'
    });
});

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
