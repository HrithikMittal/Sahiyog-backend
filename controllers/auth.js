const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const jwt = require('jsonwebtoken');
const User = require('../modals/user');




exports.register =asyncHandler(async(req,res,next) => {

  const newUser = new User(req.body);
  await newUser.save()

  console.log("hello");
  sendTokenResponse(newUser, 200, res);

  next();
});



// @desc      Login user
// @route     POST /login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  const user = await User.findOne({ name});
  if (!user) {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});


const sendTokenResponse = (user, statusCode, res) => {
  console.log(user);
  const token = user.getSignedJwtToken();
  const options = {
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }
  res
    .status(statusCode)
    .json({
      success: true,
      token
    });
};
