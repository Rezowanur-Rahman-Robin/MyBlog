import React from 'react';
import { Link } from 'react-router-dom';

function RealtedPost({post}) {
    return (
        <>
           <div className="single-blog ">
                                    <div className="post-thumbnile ">
                                    <Link to={ `/blog/${post._id}` }>

                                      <img src={post.image}
                                         alt={post.mainTitle} />

                                    </Link>
                                        <div className="cetagory-icon ">
                                            <span className="flaticon-video-player "></span>
                                        </div>
                                    </div>
                                    <div className="blog-info ">
                                        <div className="blog-title ">
                                        <Link to={ `/blog/${post._id}` } >

                                           <h3>{post.mainTitle }</h3>
                                       </Link>
                                        </div>
                                        <div className="blog-content ">
                                            <p>{`${post.shortDesc}...`}</p>
                                        </div>
                                        <div className="blog-meta fix ">
                                            <div className="meta-left pull-left ">
                                                <ul>
                                                    <li> <span className="flaticon-man-user user "></span>
                                                        <p>By <Link>রবিন </Link> </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="post-readmore pull-right ">
                                            <Link    to={`/blog/${post._id}`} className="readmore-btn ">Read More <span>+</span> </Link>
                                         
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
        </>
    )
}

export default RealtedPost
