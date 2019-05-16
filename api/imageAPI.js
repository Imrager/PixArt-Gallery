const mongoose = require('../db/connection');
const ObjectId = mongoose.Schema.Types.ObjectId

let ImagesSchema = mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    userId: ObjectId
});

let ImagesCollection = mongoose.model('Images', ImagesSchema);

function createImages(req, res) {
    return ImagesCollection.create(req.body).then(image => {
        res.json(image)
    });
}

function getImages() {
    return ImagesCollection.find();
}

function getImage(imageId) {
    return ImagesCollection.findById(imageId);
}
function deleteImage(userId) {
    return ImagesCollection.deleteOne({ _id: userId });
}

function getImageByUserId(req, res) {
    return ImagesCollection.find({ userId: req.params.userId }).then(image => {
        res.json(image);
      })
}

function updateImage(userId, imageUrl) {
    return ImagesCollection.updateOne({ _id: userId }, { ...imageUrl });
}


module.exports = {
    createImages,
    getImages,
    getImage,
    deleteImage,
    getImageByUserId,
    updateImage,
    ImagesCollection
}