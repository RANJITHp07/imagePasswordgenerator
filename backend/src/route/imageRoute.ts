import express from 'express';
import controller from '../controller/imageController'
import { upload } from '../middleware/multer';

const router=express.Router()

router.post('/:id', upload.single('file'), controller.createImage)
// router.post('/login',controller.login)

export default router