import React from 'react'

function BlogTitleArea({post}) {
    return (
        <>
                <div className="breadcrumb-area  ">
        <div className="container animate__animated animate__backInLeft">
            <div className="row">
                <div className="col-sm-12">
                    <div className="breadcrumb-title">
                        <h2>{post.mainTitle }</h2>
                    </div>
                    <div className="breadcrumb-sibtitle">
                        <h4>{post.subTitle}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default BlogTitleArea
