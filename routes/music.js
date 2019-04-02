const express = require('express');
const Router = express.Router;


// create the router
const musicRoutes = Router();

// add handlers for the routes
const {
    create,
    retrieveAll,
    update,
    deletes,
} = require('../controllers/music');


// GET
musicRoutes.get('/', retrieveAll);

// POST
musicRoutes.post('/', create);

// PUT
musicRoutes.put('/', update);

// DELETE
musicRoutes.delete('/', deletes);

// export the router
module.exports = musicRoutes;