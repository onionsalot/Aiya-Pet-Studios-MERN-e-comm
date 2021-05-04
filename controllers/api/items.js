const Item = require('../../models/item');

module.exports={
    index,
    create
}

async function index(req, res, next) {
    const items = await Item.find({});
    res.json(items)
}
async function create(req, res, next) {
    const item = await Item.create(req.body);
    res.status(201).json(item);
}