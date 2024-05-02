const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyAccessToken(req, res, next) {
  console.log(res.locals.user);
  try {
    const accessToken = req.headers.authorization.split(' ')[1]; // 'Bearer token'
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    console.log(res.locals.user);
    res.locals.user = user;

    next();
  } catch (error) {
    console.log('Invalid access token');
    res.status(403).send('Invalid access token');
  }
}

module.exports = verifyAccessToken;
