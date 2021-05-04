const Category = require('../../models/category');

module.exports={
    index,
    create
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