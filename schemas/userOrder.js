const mongoose = require("mongoose");
const { Schema } = require('mongoose');

const user = require('./user'); 
const userOrderSchema = new mongoose.Schema(
  {
    userId: {
        type: Schema.Types.ObjectId,
        ref: user,
        required: true,
    },
    userOrderList: [
      {
        productName: { type: String, required: true, default: 'coffee' },
        productType: { type: String, enum: ["latte", "capechino", "americano", "normal"], default: "normal" },
        quantity: { type: Number, required: true, default: 1 },
        additionalInfo: { type: String },
      },
    ],
    status: { type: String, enum: ["pending", "done", "cancelled"], default: "pending" },
  },
  { timestamp: true }
);

const userOrder = mongoose.model("userOrder", userOrderSchema);

module.exports = userOrder;
