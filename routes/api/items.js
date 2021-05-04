const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET api.items
router.get('/', itemsCtrl.index)

// POST api.items
router.post('/', itemsCtrl.create)
router.delete('/:id', itemsCtrl.delete)

module.exports = router;
