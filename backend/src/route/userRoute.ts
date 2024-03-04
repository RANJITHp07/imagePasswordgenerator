import express from 'express';
import controller from '../controller/userController'

const router=express.Router()

router.post('/signup',controller.signUp)
router.post('/login',controller.login)

export default router