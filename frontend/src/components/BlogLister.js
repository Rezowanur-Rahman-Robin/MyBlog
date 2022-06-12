import { css } from "@emotion/react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DotLoader from "react-spinners/DotLoader";
import { listPosts } from '../actions/postAction';
import Blog from './Blog';
import Paginate from './Paginate';



function BlogLister({categorizedPosts}) {

    const dispatch= useDispatch()

    const postList= useSelector((state)=> state.postList)
    
    const {posts, loading,keyword,pages,page} =postList

    const selectedPosts= categorizedPosts? categorizedPosts : posts;


    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  
  
`;

    useEffect(()=>{
        dispatch(listPosts())
    },[dispatch])



    return (
        <>
        {loading ? (
                <DotLoader color={'#f44336'} loading={loading} css={override}  /> 
        ) :(<div>
            {selectedPosts && selectedPosts.map((post,id)=> (
                <Blog post={post} iterator={posts.length - id} />
            ))}

           </div>
        ) }

        <div class="container">
        {!categorizedPosts && (
            <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
    
            />
        )}
        </div>

      
          
        </>
    )
}

export default BlogLister
