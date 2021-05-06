const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET api.items
router.get('/', categoriesCtrl.index)

// POST api.items
router.post('/', categoriesCtrl.create)
router.delete('/:id', categoriesCtrl.delete)

router.put('/:id', categoriesCtrl.update);

module.exports = router;
