const user = require('./../user');
const secrets = require('././../secret');

module.exports = {

  getName(req, res, next) {
    res.status(200).json(user.name);
  },

  getLocation(req, res, next) {
    res.status(200).json(user.location);
  },

  getOccupations(req, res, next) {
    res.status(200).json(user.occupations)
  },

  getLastJob(req,res,next) {
    res.status(200).json(user.occupations[user.occupations.length - 1])
  },

  getHobbies(req, res, next) {
    console.log(req.query);
    res.status(200).json(user.hobbies)
  },

  getSecrets(req, res, next) {
    res.status(200).json(secrets);
  },

  changeName(req,res,next) {
    console.log(req.params);
    user.name = req.params.one
    res.status(501).json(user.name)
  },

  addSomething(req,res,next) {
    console.log(req.query);
    user.hobbies.push({name: req.query.name, type: req.query.type})
    res.status(200).json('good job ruining this code')
  }

}
