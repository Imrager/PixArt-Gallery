const express = require('express');
const router = express.Router()

const image = require("../api/imageAPI");
const user = require("../api/userAPI");


router.get('/', user.getUsers)
router.post('/', user.createUser)
// router.delete('/', user.deleteUser)


router.get('/:userId', user.getUser)
// router.post('/:userId', user.createUser)
router.delete('/:userId', user.deleteUser)

router.get('/:userId/gallery/', image.getImageByUserId)
router.post('/:userId/gallery', image.createImages)
// router.put('/:userId/gallery', image.updateImage)

router.get('/:userId/gallery/:imageId', image.getImage)
router.delete('/:userId/gallery/:imageId', image.deleteImage)



module.exports = router;