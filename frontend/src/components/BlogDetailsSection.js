import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPostsByCat } from "../actions/postAction";
import RealtedPost from "./RealtedPost";
import FullBlog from "./FullBlog";
import { Link, useHistory } from "react-router-dom";
import CommentSection from "./CommentSection";
import Loader from "./Loader";

function BlogDetailsSection({ blogPost }) {
  const dispatch = useDispatch();

  const categorizedPostList = useSelector((state) => state.categorizedPostList);

  const { posts, loading } = categorizedPostList;

  useEffect(() => {
    dispatch(listPostsByCat(blogPost.catagory));
  }, [dispatch, blogPost.catagory]);

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const suffledArray = shuffle(posts);

  const relatedPost = suffledArray.slice(0, 2);

  const history = useHistory();
  return (
    <>
      <div className="blog-details-area section animate__animated animate__backInLeft ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <FullBlog post={blogPost} />

              <div className=" pagination-area ">
                <div className=" pagination ">
                  <ul>
                    <li className=" prev ">
                      <Link onClick={() => history.push("/")}>Prev</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <CommentSection post={blogPost} />

              <div className="related-post box-shadow mt-70 ">
                <div className="section-title ">
                  <h3>Related Post</h3>
                </div>
                <div className="related-slide-post ">
                  {loading ? (
                    <Loader />
                  ) : (
                    <div className="row">
                      {relatedPost.map((rPost) => {
                        return (
                          <div className="col-md-6">
                            <RealtedPost post={rPost} />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="leaf-left ">
          <img src="assets/images/leaf-left.png " alt="leaf-right " />
        </div>
        <div className="leaf-right ">
          <img src="assets/images/leaf-right.png " alt="leaf-right " />
        </div>
      </div>
    </>
  );
}

export default BlogDetailsSection;
