const Item = require('../../models/item');

module.exports={
    index,
    create,
    delete: deleteOne,
    update
}

async function index(req, res, next) {
    const items = await Item.find({});
    res.json(items)
}
async function create(req, res, next) {
    const item = await Item.create(req.body);
    res.status(201).json(item);
}
async function deleteOne(req, res, next) {
    const deletedItemID = await Item.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedItemID)
}
async function update(req, res, next) {

}