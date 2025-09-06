const mongoose = require("mongoose");

const creditCardSchema = new mongoose.Schema(
  {
    bankName: String,
    cardNumber: String,
    cardHolderName: String,
    expiryMonth: Number,
    expiryYear: Number,
    cardType: String,
  }
);

const CreditCard = mongoose.model("CreditCard", creditCardSchema);

module.exports = CreditCard;
