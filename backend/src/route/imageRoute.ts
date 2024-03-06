import express from 'express';
import controller from '../controller/imageController'
import { upload } from '../middleware/multer';
import verifyToken from '../middleware/verifyMiddleware';

const router=express.Router()

router.post('/:id',verifyToken, upload.single('file'), controller.createImage)
router.get('/:id',verifyToken, controller.listAllImages)
router.delete('/:id',verifyToken, controller.deleteImage)

export default router