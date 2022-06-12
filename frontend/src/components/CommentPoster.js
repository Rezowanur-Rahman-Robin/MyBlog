import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { createNewComment } from '../actions/postAction';
import Loader from './Loader';
import Message from './Message';


function CommentPoster({id}) {

    const [comment,setComment]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    const dispatch = useDispatch()

    const commentInfo = useSelector((state) => state.commentInfo)
    const {loading , error} = commentInfo


    

 





    const submitPostHandler = (e)=>{

        e.preventDefault()

       


        console.log("post is submitting...")

        dispatch(createNewComment(id,name,email,comment))

    }

    return (
        <>
        <div id="respond" className="comment-respond">
<h3 id="reply-title" className="comment-reply-title">
    Leave a Reply <small><Link rel="nofollow" id="cancel-comment-reply-link" href="" style={{display:'none'}}>Cancel reply</Link></small>
</h3>			
<form action="" method="post" id="commentform" className="comment-form" novalidate>
  
<div className="oneall_social_login">
<div className="oneall_social_login_label" styles={{marginBottom:'3px'}}><label>Connect with:</label></div>
<div className="oneall_social_login_providers" id="oneall_social_login_providers_3936207"></div>

</div>

<p className="comment-notes">
    <span id="email-notes">Your email address will not be published.</span>
     Required fields are marked
      <span className="required">*</span>
</p>

<p className="comment-form-comment">
    <div class="row">
        <div className="col-sm-3">
        <label for="comment">Comment<span className="required">*</span></label>
        </div>
        <div className="col-sm-9">
        <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required" onChange={(e)=> setComment(e.target.value)}></textarea>

        </div>
    </div>
    
</p>

<p className="comment-form-author">

<div class="row">
        <div className="col-sm-3">
        <label >Name <span className="required">*</span></label>
        </div>
        <div className="col-sm-9">
        <input  type="text"  size="30" maxlength="245" required='required' onChange={(e)=> {
            setName(e.target.value)
        }}/>

        </div>
</div>

</p>

<p className="comment-form-email">


<div class="row">
        <div className="col-sm-3">
        <label for="email">Email <span className="required">*</span></label> 
        </div>
        <div className="col-sm-9">
        <input id="email" name="email" type="email" size="30" maxlength="100" required='required' onChange={(e)=> setEmail(e.target.value)}/>

        </div>
</div>
</p>




<p className="form-submit">
    
    <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" onClick={submitPostHandler }/> 
    {loading && <Loader/>}
    {error && <Message>{error}</Message>}
</p>

</form>

</div>
            
        </>
    )
}

export default CommentPoster
