const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "users"},
    items: [
        {
            itemId: Schema.Types.ObjectId,
            name: String,
            quantity: Number,
            price: Number
        }
    ],
    paid: { type: Boolean, default: false}
    
}, { timestamps: true });

module.exports = mongoose.model("cart", cartSchema, 'carts');
