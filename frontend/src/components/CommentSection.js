import React,{useEffect} from 'react'
import CommentPoster from './CommentPoster'
import SingleComment from './SingleComment'
import { useDispatch, useSelector } from 'react-redux'
import { listComments } from '../actions/postAction'


function CommentSection({post}) {

     const dispatch = useDispatch()

     const commentInfo = useSelector((state) => state.commentInfo)
     const { commentDetails} = commentInfo

     const getComments = useSelector((state) => state.getComments)
     const { comments} = getComments




    useEffect(()=>{
     
        dispatch(listComments(post._id))
        

    },[dispatch,commentDetails,post])

    return (
        <>
        <div id="comments" className="comments-area">

	
<h2 className="comments-title">
{comments && comments.length} জন কমেন্ট করেছেন &ldquo;<span>{post.mainTitle}</span>&rdquo;		</h2>


<ol className="comment-list">
    {comments && comments.map((comment)=> (
        <SingleComment comment={comment} />
    ))}
     
</ol>



     <CommentPoster id ={post._id} />

</div>   
            
        </>
    )
}

export default CommentSection
