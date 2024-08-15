const Product = require("../models/productModule")

exports.getAllProduct = (req,res) => {
    res.status(200).json({message:"Route is Working"})
}