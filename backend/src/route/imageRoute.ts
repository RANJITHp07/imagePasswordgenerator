import express from 'express';
import controller from '../controller/imageController'
import { upload } from '../middleware/multer';

const router=express.Router()

router.post('/:id', upload.single('file'), controller.createImage)
router.get('/:id', controller.listAllImages)
router.delete('/:id', controller.deleteImage)

export default router