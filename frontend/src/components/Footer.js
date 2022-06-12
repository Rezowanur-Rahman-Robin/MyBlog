import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listPosts } from '../actions/postAction'


function Footer() {

    const dispatch= useDispatch()

    const postList= useSelector((state)=> state.postList)
    
    const {posts, } =postList

    
    useEffect(()=>{
        dispatch(listPosts())
    },[dispatch])

    const recentPost=posts&& posts.slice(0,2)


    return (
        <>
         <footer className="footer-area  section animate__animated animate__backInUp ">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-widget widget-text">
                            <div className="footer-logo">
                                <h2><a href="index-2.html"> রবিনের রাফখাতা </a></h2>
                            </div>
                            <div className="widget-content">
                                <p> একটি ব্যক্তিগত ব্লগ। নিজের মনের জানালার দ্বার খোলার প্রথম পদক্ষেপ। সকলে মিলেই হয়তো একটু একটু করে আমরা দেশটাকে পাল্টে দিবো। 
                                    সেই দিনের স্বপ্ন দেখি যখন দেশে কোন বেকারত্ব থাকবে না। দেশের প্রতিটা মানুষ স্বনির্ভর হবে।থাকবে না কোনো দারিদ্র। হতে পারে তা স্বপ্ন। কিন্তু স্বপ্ন 
                                    থেকেইতো একদিন সত্যি হয়। </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-widget widget-nave">
                            <div className="widget-title">
                                <h3>কুইক লিঙ্ক</h3>
                            </div>
                            <div className="widget-nave-list">
                                <ul>
                                    <li><Link to="/">হোমপেইজ </Link></li>
                                    <li><Link to="/category/web">ওয়েব</Link></li>
                                    <li><Link to="/category/app">অ্যাপস</Link></li>
                                    <li><Link to="/category/cp">সিপি</Link></li>
                                    <li><Link to="/category/dsalgo">ডাটা স্টাকচার/অ্যালগোরিদম</Link></li>
                                    <li><Link to="/category/mytalk">আমার কথা</Link></li>
                         
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-widget widget-recent-post">
                            <div className="widget-title">
                                <h3>সাম্প্রতিক পোস্ট </h3>
                            </div>
                            <div className="recent-post-list">
                                {recentPost && recentPost.map((post)=>{
                                    return (
                                <div className="single-post">
                                    <p><Link  to={`/blog/${post._id}`}>{post.mainTitle}</Link></p>
                                </div>
                                    )
                                })}
                                

                               
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-widget widget-Subscribe">
                            <div className="widget-title">
                                <h3>যোগাযোগ করুন</h3>
                            </div>
                            <div className="widget-Subscribe-form">

                                <form
                                    action=""
                                    method="post" target="_blank" novalidate>
                                    <div id="js-form-inputs">
                                        <div>
                                            <input type="email" name="EMAIL" id="mce-EMAIL" value=""
                                                placeholder="Email Address"/>
                                            
                                            <textarea className='contact__us_textarea' rows='5' cols='30' type="text" name="TEXT" id="mce-EMAIL" value=""
                                                placeholder="Write your message.."/>
                                        </div>
                                    </div>

                                  
                                   

                                   
                                    <button type="submit" name="subscribe" className="btn btn-secondary btn-lg btn-block"
                                        id="mc-embedded-subscribe">SUBMIT
                                    </button>

                                   
                                    <p id="js-subscribe-response"></p>
                                </form>

                            </div>
                          
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyright-area">
                            <p>&copy; 2021 Robin's Blog. All rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    </footer>
            
        </>
    )
}

export default Footer
