const mongoose = require('../db/connection');
const ObjectId = mongoose.Schema.Types.ObjectId

let ImagesSchema = mongoose.Schema({
  imageUrl: String,
  description: String,
  userId: ObjectId
});

let ImagesCollection = mongoose.model('Images', ImagesSchema);

function createImages(newImages) {
    return ImagesCollection.create(newImages);
}

function getImages() {
    return ImagesCollection.find();
}

function getImage(imageId) {
    return ImagesCollection.findById(imageId);
}
function deleteImage(userId) {
    return ImagesCollection.deleteOne({_id: userId});
}

function getImageByUserId(userid){
    return ImagesCollection.find({ userId: userid })
}

function updateImage(userId, imageUrl) {
    return ImagesCollection.updateOne({ _id: userId}, {...imageUrl});
}
  

module.exports = {
    createImages,
    getImages,
    getImage,
    deleteImage,
    getImageByUserId,
    updateImage
}