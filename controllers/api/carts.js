const Cart = require("../../models/cart");

module.exports = {
  index,
  create,
  delete: deleteItem,
  updateItem,
  updateQuantity,
};

async function index(req, res, next) {
  let cart = await Cart.find({ userId: req.params.uid });
  const unpaid = cart.find((c) => c.paid === false);
  if (cart.length === 0 || unpaid === undefined) {
    const newCart = await Cart.create({ userId: req.params.uid });
    cart = await Cart.find({ userId: req.params.uid });
  }
  res.json(cart);
}
async function create(req, res, next) {}
async function deleteItem(req, res, next) {
  const deletedItemId = await Cart.updateOne(
    { _id: req.params.cid },
    { $pull: { items: { _id: [req.params.iid] } } }
  );
  res.status(200).json(deletedItemId);
}
async function updateItem(req, res, next) {
  const result = await Cart.findById(req.params.id);
  result.items.push(req.body);
  await result.save();
  res.status(200).json(result);
}

async function updateQuantity(req, res, next) {
  const result = await Cart.updateOne(
    {
      _id: req.params.cid,
      "items._id": req.params.iid,
    },
    {
      $set: {
        "items.$.quantity": req.body.quantity,
      },
    }
  );

  console.log("successfully added item! current cart is", result);
  res.status(200).json(result);
}
