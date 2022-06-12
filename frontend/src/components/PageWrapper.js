import React from 'react'
import BlogLister from './BlogLister'
import RightWrapper from './RightWrapper'

function PageWrapper({posts}) {
    return (
        <div className="page__wrapper">

            <div className="row">
               <div className="col-md-9">
               <BlogLister categorizedPosts={posts} />
               </div>

               <div className="col-md-3">
                <RightWrapper/>
               </div>

            </div>
            
        </div>
    )
}

export default PageWrapper
