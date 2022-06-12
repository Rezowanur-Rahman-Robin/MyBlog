import { Link } from 'react-router-dom';



function Blog({post,}) {
    return (
        post && 
        <div className="Blog animate__animated animate__lightSpeedInLeft">
            <div className="single-post">
                        <div className="inner-post" 
                            style={{cursor: 'pointer'}}>
                                <div class="row">

                                    <div class="col-md-5">
                                    <div className="post-img">
                                        <Link to={ `/blog/${post._id}` }>

                                       <img src={post.image}
                                        alt={post.mainTitle} />

                                        </Link>
                              
                                   </div>
                                    </div>

                                    <div class="col-md-7">
                                    <div className="post-info">
                                        <Link to={ `/blog/${post._id}` }></Link>
                                <div className="full-div"></div>
                                <div className="post-title">
                                <Link to={ `/blog/${post._id}` } >

                                <h3>{post.mainTitle }</h3>
                                </Link>
                                   
                                </div>

                                <div className="post-content">
                                    <p> {post.shortDesc} </p>
                                </div>
                                <div className="blog-meta fix">
                                    <div className="meta-left pull-left">
                                        <ul>
                                            <li><span className="flaticon-man-user user"></span>
                                                <p>By <Link > Robin</Link></p>
                                            </li>
                                            <li><span className="flaticon-calendar clendar"></span>
                                                <p> {new Date(post.createdAt).toDateString()} </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="post-readmore pull-right">
                                        <Link to={ `/blog/${post._id}` } >
                                        <div className="readmore-btn">More
                                            <span>+</span></div>
                                        </Link>
                                       
                                    </div>
                                </div>
                            </div>
                                    </div>

                                </div>
                            
                            
                        </div>
                        <div className="post-date one">
                            <span> <i className="fa fa-eye"></i> {post.totalReading}</span>
                            
                        </div>
                    </div>
        </div>
        
    )
}

export default Blog
