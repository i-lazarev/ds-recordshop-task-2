const cors = (req, res, next) => {
    res.set("ACCESS-CONTROL-ALLOW-ORIGIN", "*");
    res.set("ACCESS-CONTROL-ALLOW-HEADERS", "*");
    next();
  };

module.exports = cors;
