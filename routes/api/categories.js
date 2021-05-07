const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', categoriesCtrl.index)
router.post('/', ensureLoggedIn, categoriesCtrl.create)
router.delete('/:id', ensureLoggedIn, categoriesCtrl.delete)
router.put('/:id', ensureLoggedIn, categoriesCtrl.update);

module.exports = router;
