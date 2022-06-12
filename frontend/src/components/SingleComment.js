import React from 'react'
import { Link } from 'react-router-dom'

function SingleComment({comment}) {
    return (
        <>

<li id="comment-435" className="comment even thread-even depth-1  animate__animated animate__backInLeft">
<article id="div-comment-435" className="comment-body">
    <footer className="comment-meta">
        <div className="comment-author vcard">
            <img alt='none' src='https://cdn4.vectorstock.com/i/1000x1000/92/38/happy-man-face-vector-8809238.jpg' className='avatar avatar-32 photo' height='32' width='32' />			
    			<b className="fn"> {comment.name} </b> <span className="says">says:</span>					</div>

        <div className="comment-metadata">
            <Link>
                <time datetime="">
                      {new Date(comment.date).toDateString()}                    
            	</time>
            </Link>
                                </div>

                        </footer>

    <div className="comment-content">
        <p>{comment.commentContents }</p>
    </div>

    		
    
    </article>
</li>
            
        </>
    )
}

export default SingleComment
