const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: { type: Schema.types.ObjectId, ref: "users"},
    items: [
        {
            itemId: Schema.types.ObjectId,
            ref: "items",
            name: String,
            quantity: Number,
            price: Number
        }
    ]
    
});

module.exports = mongoose.model("Item", cartSchema, 'items');
