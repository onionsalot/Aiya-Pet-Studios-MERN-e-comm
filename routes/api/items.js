const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET api.items
router.get('/', ensureLoggedIn, itemsCtrl.index)
router.get('/:id', ensureLoggedIn, itemsCtrl.show)

// POST api.items
router.post('/', ensureLoggedIn, itemsCtrl.create)
router.delete('/:id', ensureLoggedIn, itemsCtrl.delete)

router.put('/:id', ensureLoggedIn, itemsCtrl.update);

module.exports = router;
