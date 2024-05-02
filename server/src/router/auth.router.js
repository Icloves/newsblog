const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../utils/generateTokens');
const cookiesConfig = require('../configs/cookiesConfig');

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const targetUser = await User.findOne({ where: { email } });
  if (!targetUser) return res.sendStatus(401);

  const isValid = await bcrypt.compare(password, targetUser.password);
  if (!isValid) return res.sendStatus(401);

  const user = targetUser.get();
  delete user.passsword;

  const { accessToken, refreshToken } = generateTokens({ user });

  return res
    .cookie('refreshToken', refreshToken, cookiesConfig)
    .json({ accessToken, user });
});

authRouter.post('/signup', async (req, res) => {
  const { email, password, name } = req.body;
  console.log(password, 'YA NEW PASS');
  if (password.length < 3) return res.sendStatus(400);

  // const hpassword = await bcrypt.hash(password, 10);
  const [newUser, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, password: await bcrypt.hash(password, 10) },
  });
  if (!created) return res.sendStatus(403);

  const user = newUser.get();
  delete user.password;

  const { accessToken, refreshToken } = generateTokens({ user });

  return res
    .cookie('refreshToken', refreshToken, cookiesConfig)
    .json({ accessToken, user });
});

authRouter.get('/logout', (req, res) => {
  res.clearCookie('refreshToken').sendStatus(200);
});

module.exports = authRouter;
