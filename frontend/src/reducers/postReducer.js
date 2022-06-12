import { COMMENT_POST_FAIL, COMMENT_POST_REQUEST, COMMENT_POST_SUCCESS, CREATE_NEW_POST_FAIL, CREATE_NEW_POST_REQUEST, CREATE_NEW_POST_SUCCESS, DETETE_POST_FAIL, DETETE_POST_REQUEST, DETETE_POST_SUCCESS, GET_ALL_POSTS_FAIL, GET_ALL_POSTS_REQUEST, GET_ALL_POSTS_SUCCESS, GET_COMMENTS_FAIL, GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_POSTS_FAIL, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POST_BY_CAT_FAIL, GET_POST_BY_CAT_REQUEST, GET_POST_BY_CAT_SUCCESS, GET_POST_BY_ID_FAIL, GET_POST_BY_ID_REQUEST, GET_POST_BY_ID_SUCCESS, GET_POST_BY_LAN_FAIL, GET_POST_BY_LAN_REQUEST, GET_POST_BY_LAN_SUCCESS, UPDATE_NEW_POST_FAIL, UPDATE_NEW_POST_REQUEST, UPDATE_NEW_POST_SUCCESS } from "../constants/postConstants";





export const allPostListReducer = (state={posts:[]},action)=>{

    switch(action.type){
        case GET_ALL_POSTS_REQUEST:
            return {loading:true, posts:[]}

        case GET_ALL_POSTS_SUCCESS:
            return {
                loading:false,
                posts:action.payload.filteredPosts,
            }

        case GET_ALL_POSTS_FAIL:
            return {
                loading: false,
                error:action.payload,
            }

        default:
            return {...state} 
    }
}


export const postListReducer = (state={posts:[]},action)=>{

    switch(action.type){
        case GET_POSTS_REQUEST:
            return {loading:true, posts:[]}

        case GET_POSTS_SUCCESS:
            return {
                loading:false,
                posts:action.payload.filteredPosts,
                pages:action.payload.pages,
                page:action.payload.page,
            }

        case GET_POSTS_FAIL:
            return {
                loading: false,
                error:action.payload,
            }

        default:
            return {...state} 
    }
}

export const postDetailsByIdReducer = (state={post:{ comments:[] }},action)=>{

    switch(action.type){
        case GET_POST_BY_ID_REQUEST:
            return {loading:true, post:{}}

        case GET_POST_BY_ID_SUCCESS:
            return {
                loading:false,
                post:action.payload.post,
            }

        case GET_POST_BY_ID_FAIL:
            return {
                loading: false,
                error:action.payload,
            }

        default:
            return {
                ...state
            }
    }
}


export const postDetailsByCategoryReducer = (state={posts:[]},action)=>{

    switch(action.type){
        case GET_POST_BY_CAT_REQUEST:
            return {loading:true, posts:[]}

        case GET_POST_BY_CAT_SUCCESS:
            return {
                loading:false,
                posts:action.payload.categorizedPosts,
            }

        case GET_POST_BY_CAT_FAIL:
            return {
                loading: false,
                error:action.payload,
            }

        default:
            return {...state}
    }
}


export const postDetailsByLanguageReducer = (state={posts:[]},action)=>{

    switch(action.type){
        case GET_POST_BY_LAN_REQUEST:
            return {loading:true, posts:[]}

        case GET_POST_BY_LAN_SUCCESS:
            return {
                loading:false,
                posts:action.payload.languagedPosts,
            }

        case GET_POST_BY_LAN_FAIL:
            return {
                loading: false,
                error:action.payload,
            }

        default:
            return {...state}
    }
}

export const commentReducer = (state={comments:[]},action)=>{

    switch(action.type){
        case COMMENT_POST_REQUEST:
            return {loading:true, commentDetails:{}}

        case COMMENT_POST_SUCCESS:
            return {
                loading:false,
                commentDetails:action.payload,
            }

        case COMMENT_POST_FAIL:
            return {
                loading: false,
                error:action.payload,
            }

        case GET_COMMENTS_REQUEST:
            return {commentLoading:true, comments:[]}

        case GET_COMMENTS_SUCCESS:
            return {
                commentLoading:false,
                comments: action.payload
            }

        case GET_COMMENTS_FAIL:
            return{
                commentLoading: false,
                error:action.payload,
            }

        default:
            return {...state}
    }
}



export const getCommentReducer = (state={comments:[]},action)=>{

    switch(action.type){
       

        case GET_COMMENTS_REQUEST:
            return {commentLoading:true, comments:[]}

        case GET_COMMENTS_SUCCESS:
            return {
                commentLoading:false,
                comments: action.payload
            }

        case GET_COMMENTS_FAIL:
            return{
                commentLoading: false,
                commentError:action.payload,
            }

        default:
            return {...state}
    }
}

export const createPostReducer = (state={ newPost:{} },action)=>{

    switch(action.type){
       

        case CREATE_NEW_POST_REQUEST:
            return {loading:true,}

        case CREATE_NEW_POST_SUCCESS:
            return {
                loading:false,
                newPost: action.payload
            }

        case CREATE_NEW_POST_FAIL:
            return{
                loading: false,
                error:action.payload,
            }

        default:
            return {...state}
    }
}



export const updatePostReducer = (state={ updatedPost:{} },action)=>{

    switch(action.type){
       

        case UPDATE_NEW_POST_REQUEST:
            return {loading:true,}

        case UPDATE_NEW_POST_SUCCESS:
            return {
                loading:false,
                updatedPost: action.payload
            }

        case UPDATE_NEW_POST_FAIL:
            return{
                loading: false,
                error:action.payload,
            }

        default:
            return {...state}
    }
}




export const deletePostReducer = (state={ deletedPost:{} },action)=>{

    switch(action.type){
       

        case DETETE_POST_REQUEST:
            return {loading:true,}

        case DETETE_POST_SUCCESS:
            return {
                loading:false,
                deletedPost: action.payload
            }

        case DETETE_POST_FAIL:
            return{
                loading: false,
                error:action.payload,
            }

        default:
            return {...state}
    }
}