const Category = require('../../models/category');

module.exports={
    index,
    create,
    delete: deleteOne,
    update,
}

async function index(req, res, next) {
    console.log('CATEGORY INDEX')
    const categories = await Category.find({});
    console.log(`category getall responded with => ${categories}`)
    res.json(categories)
}
async function create(req, res, next) {
    const category = await Category.create(req.body);
    res.status(201).json(category);
}
async function deleteOne(req, res, next) {
    const deletedItemID = await Category.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedItemID)
}
async function update(req, res, next) {
    const updatedItem = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedItem)
}