import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAllPosts } from '../actions/postAction'
import Loader from './Loader'
import Message from './Message'
import RightMenuCategory from './RightMenuCategory'


function RightWrapper() {


    const dispatch= useDispatch()

    const allPostList= useSelector((state)=> state.allPostList)
    
    const {posts, loading, error} =allPostList

    useEffect(()=>{
        dispatch(listAllPosts())
    },[dispatch])

    const webPosts=posts && posts.filter((post)=>post.catagory==='web')
    const appPosts=posts && posts.filter((post)=>post.catagory==='app')
    const dsalgoPosts=posts && posts.filter((post)=>post.catagory==='dsalgo')
    const oopPosts=posts && posts.filter((post)=>post.catagory==='oop')
    const cpPosts=posts && posts.filter((post)=>post.catagory==='cp')
    const aimlPost=posts && posts.filter((post)=>post.catagory==='aiml')
    const othersPosts=posts && posts.filter((post)=>post.catagory==='others')
    const mytalkPosts=posts && posts.filter((post)=>post.catagory==='mytalk')

    return (
        <div className="right__wrapper animate__animated animate__backInRight" style={{textAlign:'left'}}>

            <div class="my__info">



                
            <h4 className="right__wrapper__title">আমার সম্পর্কে</h4>

            <img className="m-2" style={{maxWidth:'90%'}} src="/images/profileImage.jpeg" alt="MyImage"/>

            <h5>মোঃ রেজওয়ানুর রহমান রবিন</h5>
            <div className="mydesc">
            <p>সিএসই</p><a href="cuet.ac.bd">CUET</a>
            <p>ফুল স্টাক ডেভ্লপার</p>
            </div>
            </div>
            
           <div class="my__article animate__animated animate__backInRight">
           <h4 className="right__wrapper__title">আমার যতো লেখা</h4>

           {loading && <Loader />}

           {error && <Message variant="danger">{error}</Message>}
              
             <RightMenuCategory category="ওয়েব" posts={webPosts} />

             <RightMenuCategory category= "অ্যাপস"  posts={appPosts}/>

             <RightMenuCategory category= "ডাটা স্টাকচার/অ্যালগরিদম" posts={dsalgoPosts} />

             <RightMenuCategory category= "ওব্জেক্ট ওরিয়েন্টেড প্রোগ্রামিং"  posts={oopPosts}/>

             <RightMenuCategory category= "কম্পিটিটিভ প্রোগ্রামিং"  posts={cpPosts}/>

             <RightMenuCategory category= "এআই/এমএল" posts={aimlPost} />

             <RightMenuCategory category= "অন্যান্য"  posts={othersPosts}/>

             <RightMenuCategory category= "আমার কথা"  posts={mytalkPosts}/>

             

           </div>


            
        </div>
    )
}

export default RightWrapper
