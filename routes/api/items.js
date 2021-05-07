const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', itemsCtrl.index)
router.get('/:id', itemsCtrl.show)
router.post('/', ensureLoggedIn, itemsCtrl.create)
router.delete('/:id', ensureLoggedIn, itemsCtrl.delete)

router.put('/:id', ensureLoggedIn, itemsCtrl.update);

module.exports = router;
