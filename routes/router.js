const express = require('express');
const router = express.Router()

const image = require("../api/imageAPI");
const user = require("../api/userAPI");


router.get('/', user.getUsers)
router.post('/', user.createUser)
// router.delete('/', user.deleteUser)


router.get('/:userId', user.getUser)
// router.post('/:userId', user.createUser)
router.put('/:userId', user.updateUser)
router.delete('/:userId', user.deleteUser)

router.get('/:userId/gallery/', image.getImageByUserId)
router.post('/:userId/gallery', image.createImage)

router.get('/:userId/gallery/:imageId', image.getImage)
router.put('/:userId/gallery/:imageId', image.updateImage)
router.delete('/:userId/gallery/:imageId', image.deleteImage)



module.exports = router;