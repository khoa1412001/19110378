var { mygroup } = require("../models/MyGroup");

exports.addSV = (req, res) => {
  console.log(`${JSON.stringify(req.body)}`);
  const ID = req.body.id;
  if (!req.body.name || !ID) {
    res.status(400).send("Not valid");
    return;
  }
  if (ID !== "19110332") {
    res.status(400).send("Not valid");
    return;
  }
  if (mygroup.some((item) => item.id === ID)) {
    res.status(400).send("Not valid");
    return;
  }
  const sv = { id: ID, name: req.body.name };
  mygroup.push(sv);
  res.status(200).json(sv);
};

exports.getSV = (req, res) => {
  const ID = req.params.id;
  const sv = mygroup.find((item) => item.id === ID);
  if (!sv) {
    res.status(400).send("Not valid");
    return;
  }
  res.status(200).json(sv);
};
