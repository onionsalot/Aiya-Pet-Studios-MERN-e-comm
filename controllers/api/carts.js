const Cart = require('../../models/cart');
const item = require('../../models/item');

module.exports={
    index,
    create,
    delete: deleteItem,
    updateItem,
    updateQuantity
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
    //const deletedItemID = await Cart.findByIdAndRemove(req.params.id);
    const deletedItemId = await Cart.updateOne({_id: req.params.cid}, { $pull: {"items": {_id: [req.params.iid]}}})
    console.log('whut was removed?=>', deletedItemId)
    res.status(200).json(deletedItemId)
}
async function updateItem(req, res, next) {
    console.log('addItem To Cart initiated....' + req.params.id + req.body)
    // const addItem = await Cart.findByIdAndUpdate(req.params.id, req.body, {new: true})
    const result = await Cart.findById(req.params.id);
    result.items.push(req.body)
    await result.save()
    console.log('successfully added item! current cart is', result)
    res.status(200).json(result)
}

async function updateQuantity(req, res, next) {
    console.log('addItem To Cart initiated....' + req.params.cid + req.body)
    // const addItem = await Cart.findByIdAndUpdate(req.params.id, req.body, {new: true})
    const result = await Cart.updateOne(
        {
            _id: req.params.cid, 
            "items._id": req.params.iid
        }, 
        { $set: {
            "items.$.quantity" : req.body.quantity
        }}
        )

    console.log('successfully added item! current cart is', result)
    res.status(200).json(result)
}
