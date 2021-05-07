const express = require('express');
const router = express.Router();
const cartsCtrl = require('../../controllers/api/carts')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/:uid', ensureLoggedIn, cartsCtrl.index);
router.post('/', ensureLoggedIn, cartsCtrl.create);
router.delete('/:cid/:iid', ensureLoggedIn, cartsCtrl.delete);
router.put('/:id', ensureLoggedIn, cartsCtrl.updateItem);
router.put('/:cid/:iid', ensureLoggedIn, cartsCtrl.updateQuantity)


module.exports = router;
