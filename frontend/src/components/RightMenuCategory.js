import { Link } from 'react-router-dom'


function RightMenuCategory({category,posts}) {




    return (
        <>

<div class="content__category">
                  <Link className="content__category_link"><p className="content__category__title" style={{textAlign:'left'}}>{category.toUpperCase()} সম্পর্কিত লিখা</p></Link>
                  
                  

                  <div className="content__category__item">
                    {posts &&  posts.map((post)=> <Link to={`/blog/${post._id}`}><p className="content__category__item__heading"> {`->${post.mainTitle}`} </p></Link>  )}
                   
                  </div>
</div>
            
        </>
    )
}

export default RightMenuCategory
