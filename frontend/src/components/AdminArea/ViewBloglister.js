import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePostAction, listPosts, listPostsByCat, listPostsByLan } from '../../actions/postAction';
import Loader from '../Loader';
import Message from '../Message';
import Paginate from '../Paginate';



function ViewBloglister({category,language,type}) {

    

    const dispatch = useDispatch()

    const postList= useSelector((state)=> state.postList)
    
    const {posts, loading, error,keyword,pages,page} =postList

    const categorizedPostList=useSelector((state)=> state.categorizedPostList)

    const catagorizedPosts=categorizedPostList.posts;

    const categoryLoading = categorizedPostList.loading

    
    const languagedPostList=useSelector((state)=> state.languagedPostList)

    const languagePosts=languagedPostList.posts;
    const languageLoading = languagedPostList.loading



    let selectedPosts

   
   
    selectedPosts = catagorizedPosts? catagorizedPosts : languagePosts? languagePosts : posts;

    
    const deletePost=useSelector((state)=> state.deletePost)
    const {deletedPost} =deletePost
    const deletePostLoading = deletePost.loading;
    const deleteError = deletePost.error;
    


    
   

  useEffect(()=>{
        dispatch(listPostsByCat(category));
    },[dispatch,category,deletedPost])

    useEffect(()=>{
        dispatch(listPostsByLan(language));
    },[dispatch,language,deletedPost])
   
    useEffect(()=>{
        dispatch(listPosts('','',10))
    },[dispatch,deletedPost])


  

    return (
        <div>
            {
            
            (loading || categoryLoading || languageLoading) && <Loader />}

            {error && <Message variant="danger"> {error} </Message>}
            {deleteError && <Message variant="danger"> {deleteError} </Message>}

            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">MainTitle</th>
      <th scope="col">Banner Image</th>
      <th scope="col">Subtitle</th>
      <th scope="col">Category</th>
      <th scope="col">Language</th>
      <th scope="col">Total Views</th>
      <th scope="col">Total Comments</th>
      <th scope="col">Updated At</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
     

    </tr>
  </thead>
  <tbody>

{  
  selectedPosts.map((post,id)=>{
      return (
        <tr>
        <th scope="row"> { category || language ? id+1 :(page-1) * 10 +id +1 } </th>
        <td> {post.mainTitle} </td>
        <td><img width='70' src={post.image} alt={ post.mainTitle }/></td>
        <td>{post.subTitle} </td>
        <td>{post.catagory} </td>
        <td>{post.language}</td>
        <td>{post.totalReading}</td>
        <td>{post.comments.length}</td>
        <td>{ new Date(post.updatedAt).toDateString()}</td>
        <td>
            <Link to={`/adminArea/blog/edit/${post._id}`} >
            <button  class="btn btn-warning">Edit</button> 

            </Link>
             
        </td>
        <td> 
            <button class="btn btn-danger" onClick={()=> dispatch(deletePostAction(post._id))} >Delete</button> 
            {deletePostLoading && <Loader w="20px" h="20px"/>}
            
        </td>
  
  
  
      </tr>
      )
  })
}

  </tbody>
</table>

<div class="container">
        { !category && !language && (
            <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
            pageSize={10}
    
            />
        )}
</div>
        </div>
    )
}

export default ViewBloglister
