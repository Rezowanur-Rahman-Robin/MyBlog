import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { getTotalReading } from '../actions/postAction';



function FullBlog({post}) {

const [totalReading, setTotalReading]= useState(post.totalReading )




useEffect(() => {
    
   const getReading=async()=>{
    const  x =await getTotalReading(post._id,totalReading)

    setTotalReading(x)
   }

 
  getReading()
}, [])



    return (
        <>
        <div className="single-post box-shadow ">
                        <div className="post-thumnile">
                            <div className="slide-thumbnile">
                                <div className="single-image">
                                     <img src={post.image}
                                        alt="blog"/>
                                    <div className="post-date">
                                        <span><i className="fa fa-eye"></i> {totalReading}</span>
                                    </div> 

                                    
                                </div>
                                
                              
                            </div>
                        </div>
                        <div className="post-title">
                            <h1> {post.mainTitle} </h1>
                        </div>
                        <div className="blog-meta">
                            <ul>
                                <li> <span className="flaticon-man-user user"></span>
                                    <p>By <Link >Robin</Link> </p>
                                </li>
                                <li> <span className="flaticon-calendar clendar"></span>
                                    <p>{new Date(post.createdAt).toDateString()}</p>
                                </li>
                                <li> <span className="flaticon-chat comment"></span>
                                    <p>{post.comments.length} </p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="blog-content"  dangerouslySetInnerHTML={{__html: post.postContents}}>

                        

							</div>


						</div>
            
        </>
    )
}

export default FullBlog
