const express = require('express');
const router = express.Router();

const image = require("../api/imageAPI");
const user = require("../api/userAPI");

router.get('/:userID', user.getUser)
router.post('/:userID', user.createUser)
router.delete('/:userID', user.deleteUser)

router.get('/:userID/gallery', image.getImageByUserId)
router.post('/:userID/gallery', image.createImages)
router.put('/:userID/gallery', image.updateImage)
router.delete('/:userID/gallery', user.deleteImage)



module.exports = router;