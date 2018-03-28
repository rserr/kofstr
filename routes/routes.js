const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', function(req, res){
    homeController.display(req, res);
});

module.exports = router;