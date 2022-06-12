import { createStore, combineReducers,applyMiddleware } from 'redux';
import { hamburgerMenuReducer } from './reducers/hamburgerReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { allPostListReducer, commentReducer, createPostReducer, deletePostReducer, getCommentReducer, postDetailsByCategoryReducer, postDetailsByIdReducer, postDetailsByLanguageReducer, postListReducer, updatePostReducer } from './reducers/postReducer';
import { userDetailsReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducer';



const reducer = combineReducers({
    sidebar:hamburgerMenuReducer,
    allPostList:allPostListReducer,
    postList: postListReducer,
    postInfo: postDetailsByIdReducer,
    categorizedPostList:postDetailsByCategoryReducer,
    languagedPostList:postDetailsByLanguageReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    commentInfo:commentReducer,
    getComments:getCommentReducer,
    createNewPost:createPostReducer,
    updatePost:updatePostReducer,
    deletePost:deletePostReducer,

})

const userInfoFromStorage = localStorage.getItem('MyBlogUserInfo') ? JSON.parse(localStorage.getItem('MyBlogUserInfo')) : null



const initialState={
    userLogin : { userInfo : userInfoFromStorage, userLoginInfo:userInfoFromStorage, userRegisterInfo: userInfoFromStorage}  
     
};

const middleware=[thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
