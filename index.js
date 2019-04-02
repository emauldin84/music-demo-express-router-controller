// require express
const express = require('express');
// create app with express
const app = express();
// create port 3000
const port = 3000;

// require routers
const musicRouter = require('./routes/music')

// connect a router
app.use('/music', musicRouter);

// have express listen on port 3000
app.listen(port, () => {
    console.log(`Running on port ${port}`)
});