const userCtrl = {};

userCtrl.renderUserProfile = (req, res, next) => {
  res.render('deportes');
}

module.exports = userCtrl;