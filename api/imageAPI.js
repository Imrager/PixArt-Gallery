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
    return ImagesCollection.create({
        name: '',
        imageUrl: '',
        description: '',
        userId: req.params.userId}).then(image => {
        res.json(image)
    });
}


function getImages() {
    return ImagesCollection.find();
}

function getImage(req,res) {
    return ImagesCollection.findById(req.params.imageId).then(image =>{
        res.json(image)
    });
}
function deleteImage(req, res) {
    return ImagesCollection.deleteOne(req.params.imageId).then(image=>{
        res.json(image)
    });
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