const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET api.items
router.get('/', ensureLoggedIn, categoriesCtrl.index)

// POST api.items
router.post('/', ensureLoggedIn, categoriesCtrl.create)
router.delete('/:id', ensureLoggedIn, categoriesCtrl.delete)

router.put('/:id', ensureLoggedIn, categoriesCtrl.update);

module.exports = router;
