const getAboutPage = (req, res) => {
  res.render('about');
};

const getAddPage = (req, res) => {
  res.render('add');
};

module.exports = {
  getAboutPage,
  getAddPage,
};
