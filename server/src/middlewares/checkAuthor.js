const { Favorite } = require('../../db/models');

async function checkAuthor(req, res, next) {
  const { id } = req.params;
  const userId = res.locals.user.id;
  const targetFavorite = await Favorite.findByPk(id);
  if (targetFavorite && targetFavorite?.userId === userId) return next();
  return res.sendStatus(403);
}

module.exports = checkAuthor;
