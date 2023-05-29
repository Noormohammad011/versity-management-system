import express from 'express'
import usersController from './users.controller'
const router = express.Router()

router.post('/create-user', usersController.createUser)
router.get('/get-all-user', usersController.getAllUser)

export default router
