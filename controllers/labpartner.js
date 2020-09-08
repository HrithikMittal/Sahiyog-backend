const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../modals/user');


const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  const options = {
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }
  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token
    });
};

// @desc Register the user
// @route POST /labpartner/register
// @access private

exports.register =asyncHandler(async(req,res,next) => {

  const newUser = new User(req.body);
  await newUser.save()

  console.log("hello");
  sendTokenResponse(newUser, 200, res);

  next();
});



// @desc      Login user
// @route     POST /labpartner/login
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
