import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { listPosts } from "../actions/postAction";

const Paginate = ({ pages, page, pageSize }) => {
  const dispatch = useDispatch();


  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item 
            onClick={() => {
              dispatch(listPosts("", x + 1,pageSize));
            }}
            active={x + 1 === page}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;