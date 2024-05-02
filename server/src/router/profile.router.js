const express = require("express");
const { Favorite, User } = require("../../db/models");

const profileRouter = express.Router();

profileRouter.route("/").get(async (req, res) => {
  const favorites = await Favorite.findAll({
    include: [User],
  });
  res.json(favorites);
});

module.exports = profileRouter;
