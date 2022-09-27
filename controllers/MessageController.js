var { mygroup } = require("../models/MyGroup");
exports.getDetailID = (req, res) => {
  const ID = req.params.id;
  if (!mygroup.some((item) => item.id === ID)) {
    res.status(400).send("Not valid");
    return;
  }
  res
    .status(200)
    .send(
      "<html><body><ul><li>" +
        mygroup.find((item) => item.id === ID).name +
        "</li></ul></body></html>"
    )
    .json(mygroup.find((item) => item.id === "id"));
};
exports.getAll = (req, res) => {
  res
    .status(200)
    .send(
      "<html><body><ul>" +
        mygroup.map((item) => `<li>${item.name}</li>`).join("") +
        "</ul></body></html>"
    );
};
