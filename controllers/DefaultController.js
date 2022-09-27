var { mygroup } = require("../models/MyGroup");

exports.getAll = (req, res) => {
  res.status(200).json(mygroup);
};
