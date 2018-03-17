'use strict'

const express = require('express');
const api = express.Router();
const routes = {
    heroes: {
        url: '/heroes',
        file: '../api/heroes.mock.json',
    },
};

/**
 * Router de Cliente
 */
 api.get(routes.heroes.url, (req, res) => {
    res.send(JSON.stringify(require(routes.heroes.file)));
});


module.exports = api;
