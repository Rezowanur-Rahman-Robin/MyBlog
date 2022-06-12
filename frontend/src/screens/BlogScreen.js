import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listPostsById } from '../actions/postAction';
import BlogDetailsSection from '../components/BlogDetailsSection';
import BlogTitleArea from '../components/BlogTitleArea';
import SidebarMenu from '../components/SidebarMenu';
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

function BlogScreen({match}) {

    const dispatch = useDispatch()

    const postInfo=useSelector((state)=> state.postInfo)
    const {post,loading}=postInfo




    useEffect(()=>{

        dispatch(listPostsById(match.params.id))

    },[match.params.id,dispatch])

    const override = css`
    display: block;
    margin-top:30px;
    margin-left:auto;
    margin-right:auto;
    border-color: red;
  `;

    
    return (
        <div className="blog__screen">

             <SidebarMenu/>

             {
                 loading? (  <DotLoader color={'#f44336'} loading={loading} css={override}  /> )
                 : (
                    <>
                     <BlogTitleArea post={post} />

                     <BlogDetailsSection blogPost={post} />
                    </>
                   
                 )
             }

          


        </div>
    )
}

export default BlogScreen
