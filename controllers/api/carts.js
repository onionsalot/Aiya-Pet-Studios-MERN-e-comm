const Cart = require('../../models/cart');
const item = require('../../models/item');

module.exports={
    index,
    create,
    delete: deleteItem,
    addItem,
}

async function index(req, res, next) {
    console.log('index initiated...')
    let cart = await Cart.find({userId:req.params.uid});
    console.log('CHECK IF USER HAS ANY CARTS? => ', cart)
    const unpaid = cart.find((c) => c.paid === false);
    console.log('..Next check if there is unpaid cart', unpaid)
    if (cart.length===0 || unpaid === undefined) {
        console.log('.. Looks like either no cart or no unpaid. Make new')
        const newCart = await Cart.create({ userId: req.params.uid })
        cart = await Cart.find({userId:req.params.uid});
    }
    res.json(cart)
}
async function create(req, res, next) {
    
}
async function deleteItem(req, res, next) {
    
}
async function addItem(req, res, next) {
    
}
