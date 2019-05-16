const mongoose = require('../db/connection');

let UserSchema = mongoose.Schema({
  name: String,
  images: []
});

let UserCollection = mongoose.model('User', UserSchema);

function createUser(req, res) {
  return UserCollection.create(req.body).then(userId => {
    res.json(userId)
  });
}

function getUsers(req, res) {
  UserCollection.find().then(users => {
    res.json(users);
  });
}

function getUser(req, res) {
  return UserCollection.findById(req.params.userId).then(userId => {
    res.json(userId);
  })
}

function deleteUser(req, res) {
  return UserCollection.deleteOne({ _id: req.params.userId }).then(userId => {
    res.json(userId);
  });
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  UserCollection
}