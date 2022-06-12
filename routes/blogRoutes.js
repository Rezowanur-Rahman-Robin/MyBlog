import express from 'express';
import { createBlogComment, createNewPost, deletePost, getAllPosts, getBlogComments, getPostByCatagory, getPostById, getPostByLanguage, getPosts, getTotalReading, updatePost, updateTotalReading } from '../controllers/blogController.js';
import { adminProtection, protect } from '../middlewares/authMiddleware.js';

const router = express.Router()


router.route('/').get(getPosts).post(protect,adminProtection,createNewPost);
router.route('/all').get(getAllPosts)
router.route('/:id').get(getPostById)

router.route('/:id').put(protect,adminProtection,updatePost).delete(protect,adminProtection,deletePost);

router.route('/category/:category').get(getPostByCatagory);

router.route('/language/:language').get(getPostByLanguage);

router.route('/comment/:id').get(getBlogComments).post(createBlogComment);

router.route('/reading/:id').get(getTotalReading).post(updateTotalReading);




export default router;

