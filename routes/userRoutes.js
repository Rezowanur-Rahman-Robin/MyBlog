import express from 'express';
import { authUser, getUserById, getUserProfile, getUsers, registerUser } from '../controllers/userController.js';
import { adminProtection, protect } from '../middlewares/authMiddleware.js';

const router= express.Router();

router.post('/login',authUser);
router.route('/profile').get(protect, getUserProfile);
router.post('/signup',registerUser);
router.route('/admin').get(protect,adminProtection,getUsers);
router.route('/:id').get(protect,getUserById);
export default router;