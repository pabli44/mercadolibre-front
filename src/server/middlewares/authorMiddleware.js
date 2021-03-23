const authorMiddleware = (req, res, next) => {
  res.author = {
    name: 'Pablo',
    lastname: 'Velilla'
  };
  next();
};

module.exports = authorMiddleware;
