const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//directories
app.use(express.static('./client/dist/'));
app.use(express.static('./server/static/'));const express = require('express');

// parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});

  return res.status(200).end();
});


module.exports = router;
