const mongoose = require('../db/connection');
const Image = require("./imageAPI")
let UserSchema = mongoose.Schema({
  name: String,
  // images: [imgID]
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
  return UserCollection.findById(req.params.userId)
    .then(userId => {
      Image.ImagesCollection.find({ userId: req.params.userId }).then((images) => {
        res.json({ userId, images });
      })
    })
}
function updateUser(req, res) {
  return UserCollection.findByIdAndUpdate(req.params.userId, req.body, { new: true }).then(user => {
    res.json(user)
  });
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
  UserCollection,
  updateUser
}