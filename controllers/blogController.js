import asyncHandler from 'express-async-handler';
import fs from 'fs';
import Post from '../models/postModel.js';
import path from 'path'


import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




//@desc    Get all Posts
//@route   GET/api/posts/all
//@access  Public
const getAllPosts= asyncHandler(async (req,res)=>{



 

    const filteredPosts = await Post.find({}).select('-postContents -image -shortDesc -comments');


    
    
    res.json({filteredPosts,});
})


//@desc    Get Posts
//@route   GET/api/posts
//@access  Public
const getPosts= asyncHandler(async (req,res)=>{

    let pageSize
  

        pageSize = Number(req.query.pageSize) || 10;
 



    const page = Number(req.query.pageNumber) || 1;

    const keyword = req.query.keyword ? {
        name: {
            $regex : req.query.keyword,
            $options: 'i',
        }
    } : {}

  

    const count = await Post.countDocuments({})

    const pages =Math.ceil(count/ pageSize) ;

    const filteredPosts = await Post.find({}).sort( {createdAt: -1}).limit(pageSize).skip(pageSize * (page-1)).select('-postContents')



    
    
    res.json({filteredPosts,page,pages,});
})



//@desc    Get Post by id
//@route   GET/api/posts/:id
//@access  Public
const getPostById= asyncHandler(async (req,res)=>{


    const postId=req.params.id;

    const post =await Post.findById(postId)

    if (post) {
        res.json({post})
      } else {
        res.status(404)
        throw new Error('Post not found')
      }
})


//@desc    Get Post by category
//@route   GET/api/posts/category/:category
//@access  Public

const getPostByCatagory = asyncHandler(async (req,res)=>{



    const postCat=req.params.category;

    const categorizedPosts =await Post.find({"catagory":postCat}).sort( {createdAt: -1}).select('-postContents ')

    if (categorizedPosts) {
        res.json({categorizedPosts})
      } else {
        res.status(404)
        throw new Error('Category not found')
      }
})


//@desc    Get Post by language
//@route   GET/api/posts/language/:language
//@access  Public
const getPostByLanguage = asyncHandler(async (req,res)=>{



    const postLan=req.params.language;

 

    const languagedPosts =await Post.find({"language": postLan}).sort( {createdAt: -1}).select('-postContents ')

    if(languagedPosts){
        res.json({languagedPosts})
    }else{
        res.status(404)
        throw new Error('Language not found')
    }

    
})









//@desc    GET All the comments of a blog 
//@route   GET/api/posts/comment:id
//@access  Public




const getBlogComments = asyncHandler(async (req,res)=>{
    


    const blog = await Post.findById(req.params.id);

    if(blog){
      
       res.status(201).json(blog.comments)
    
      }else{
       res.status(404)
       throw new Error('Blog not found')
    }



})



//@desc    Create a new Blog 
//@route   POST/api/posts/
//@access  Private
const createNewPost = asyncHandler( async(req,res)=>{
    let post= new Post({
        catagory: req.body.catagory,
        language: req.body.language,
        mainTitle: req.body.mainTitle ? req.body.mainTitle : 'No Title',
        subTitle:  req.body.subTitle ? req.body.subTitle : 'No SubTitle',
        image:  req.body.image ? req.body.image :  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUicBTkarsHQzObJVMNekDRhPXJNQbShlCdR-jvq-C0hQcrsrZRSE8D59JqxloavOagQ&usqp=CAU',
        shortDesc: req.body.shortDesc ? req.body.shortDesc : 'No shortDesc',
        postContents: req.body.postContents,
        comments:req.body.comments,

    });
    

    const insertedPost = await post.save()


    res.status(201)
    res.json(insertedPost)


})




//@desc    Update a Blog Post 
//@route   PUT/api/posts/:id
//@access  Private
const updatePost = asyncHandler( async(req,res)=>{
    let post= new Post({
        catagory: req.body.catagory,
        language: req.body.language,
        mainTitle: req.body.mainTitle ? req.body.mainTitle : 'No Title',
        subTitle:  req.body.subTitle ? req.body.subTitle : 'No SubTitle',
        image:  req.body.image ? req.body.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUicBTkarsHQzObJVMNekDRhPXJNQbShlCdR-jvq-C0hQcrsrZRSE8D59JqxloavOagQ&usqp=CAU',
        shortDesc: req.body.shortDesc ? req.body.shortDesc : 'No shortDesc',
        postContents: req.body.postContents,
        comments:req.body.comments,

    });

    const findPost = await Post.findById(req.params.id)

    if(findPost){
        findPost.catagory = post.catagory,
        findPost.language = post.language,
        findPost.mainTitle = post.mainTitle,
        findPost.subTitle = post.subTitle,
        findPost.image = post.image,
        findPost.shortDesc = post.shortDesc,
        findPost.postContents = post.postContents,
        findPost.comments = post.comments

        const updatedPost = await findPost.save()


        res.status(201)
        res.json(updatedPost)
        
    }else{
        res.status(404)
        throw new Error('Post not Found')
    }
    

   


})












//@desc    Delete a Blog Post 
//@route   DELETE/api/posts/:id
//@access  Private
const deletePost = asyncHandler( async(req,res)=>{

    const post = await Post.findById(req.params.id)


    if(post){
        try {
           
                let imagePath = post.image.replace(/\\/g, '/'); // Normalize Windows-style slashes

                imagePath = imagePath.startsWith('/') || imagePath.startsWith('../') ? imagePath.substring(1) : imagePath; // Remove leading `/` or `../`
                imagePath = path.normalize(imagePath).replace(/^(\.\.(\/|\\|$))+/g, ''); // Prevent directory traversal
                const filepath = path.join(__dirname, '../', imagePath); // Construct a secure absolute path
                if (fs.existsSync(filepath) && fs.lstatSync(filepath).isFile()) {  
                    fs.unlinkSync(filepath); // Delete only if it's a file
                }
            
        } catch (error) {
            console.error('File deletion error:', error);
            throw new Error('Failed to delete file');
        }
    
        await post.remove()

        res.json('Post has been Removed!')
    }else{
        res.status(404)
        throw new Error('Post not found')
    }

   


})






//@desc    Create a new Comment 
//@route   POST/api/posts/comment
//@access  Public





const createBlogComment = asyncHandler(async (req,res)=>{
      const {name,email,comment} = req.body;


      const blog = await Post.findById(req.params.id);

      if(blog){
         const newComment = {
             
        name:name,
        email : email,
        commentContents : comment,
        like : 0,
        date : Date.now()
         }

         blog.comments.push(newComment)

         await blog.save()
         res.status(201).json({postId:req.params.id, comment: newComment})
      
        }else{
         res.status(404)
         throw new Error('Blog not found')
      }



})


//@desc    get the TotalReading
//@route   GET/api/posts/reading:id
//@access  Public




const getTotalReading = asyncHandler(async (req,res)=>{
    


    const blog = await Post.findById(req.params.id);

    if(blog){
      
       res.status(201).json(blog.totalReading)
    
      }else{
       res.status(404)
       throw new Error('Blog not found')
    }



})


//@desc    Update the TotalReading
//@route   GET/api/posts/reading:id
//@access  Public




const updateTotalReading = asyncHandler(async (req,res)=>{
    


    const blog = await Post.findById(req.params.id);

    if(blog){
      
       blog.totalReading = req.body.totalReading + 1;

       await blog.save()

       res.status(201).json(blog.totalReading)


    
      }else{
       res.status(404)
       throw new Error('Blog not found')
    }



})





export {
    getAllPosts,
    getPosts,
    getPostById,
    getPostByCatagory,
    getPostByLanguage,
    createBlogComment,
    getBlogComments,
    getTotalReading,
    updateTotalReading,
    createNewPost,
    updatePost,
    deletePost
};

