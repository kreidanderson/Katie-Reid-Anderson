const db = require("../../models/index");

module.exports = {
  findAll: function(req, res) {
    db.Message
      .find(req.query) // 
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Message
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
