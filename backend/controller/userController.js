const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const User = require("../models/userModel");

//Register a user
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar:{
        public_id : "this is a sample id",
        url:"porfileUrl",
    },
  });

  res.status(201).json({
    success:true,
    user,
  });
});
