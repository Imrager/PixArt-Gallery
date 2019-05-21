const mongoose = require('../db/connection');
const ObjectId = mongoose.Schema.Types.ObjectId

let ImagesSchema = mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    userId: ObjectId
});

let ImagesCollection = mongoose.model('Images', ImagesSchema);

function createImage(req, res) {
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
    return ImagesCollection.deleteOne({_id: req.params.imageId}).then(image=>{
        res.json(image)
    });
}

function getImageByUserId(req, res) {
    return ImagesCollection.find({ userId: req.params.userId }).then(image => {
        res.json(image);
      })
}

function updateImage(req, res) {
    return ImagesCollection.findByIdAndUpdate( req.params.imageId, req.body, {new: true}).then(image =>{
        res.json(image)
    });
}


module.exports = {
    createImage,
    getImages,
    getImage,
    deleteImage,
    getImageByUserId,
    updateImage,
    ImagesCollection
}