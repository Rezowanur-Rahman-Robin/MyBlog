import axios from "axios";
import { COMMENT_POST_FAIL, COMMENT_POST_REQUEST, COMMENT_POST_SUCCESS, CREATE_NEW_POST_FAIL, CREATE_NEW_POST_REQUEST, CREATE_NEW_POST_SUCCESS, DETETE_POST_FAIL, DETETE_POST_REQUEST, DETETE_POST_SUCCESS, GET_ALL_POSTS_FAIL, GET_ALL_POSTS_REQUEST, GET_ALL_POSTS_SUCCESS, GET_COMMENTS_FAIL, GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_POSTS_FAIL, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POST_BY_CAT_FAIL, GET_POST_BY_CAT_REQUEST, GET_POST_BY_CAT_SUCCESS, GET_POST_BY_ID_FAIL, GET_POST_BY_ID_REQUEST, GET_POST_BY_ID_SUCCESS, GET_POST_BY_LAN_FAIL, GET_POST_BY_LAN_REQUEST, GET_POST_BY_LAN_SUCCESS, UPDATE_NEW_POST_FAIL, UPDATE_NEW_POST_REQUEST, UPDATE_NEW_POST_SUCCESS } from "../constants/postConstants"








export const listAllPosts=()=> async(dispatch)=>{

  

    try{
        dispatch({type: GET_ALL_POSTS_REQUEST})

        const {data} = await axios.get(`/api/posts/all`)

        dispatch({
            type:GET_ALL_POSTS_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:GET_ALL_POSTS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const listPosts=(keyword='', pageNumber='',pageSize)=> async(dispatch)=>{

  

    try{
        dispatch({type: GET_POSTS_REQUEST})

        const {data} = await axios.get(`/api/posts?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

        dispatch({
            type:GET_POSTS_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:GET_POSTS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const listComments=(id)=> async(dispatch)=>{

  

    try{
        dispatch({type: GET_COMMENTS_REQUEST})

        const {data} = await axios.get(`/api/posts/comment/${id}`)


        dispatch({
            type:GET_COMMENTS_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:GET_COMMENTS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const listPostsById=(id)=> async(dispatch)=>{

  

    try{
        dispatch({type: GET_POST_BY_ID_REQUEST})

        const {data} = await axios.get(`/api/posts/${id}`)

        dispatch({
            type:GET_POST_BY_ID_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:GET_POST_BY_ID_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}



export const listPostsByCat=(category)=> async(dispatch)=>{

  

    try{
        dispatch({type: GET_POST_BY_CAT_REQUEST})

        const {data} = await axios.get(`/api/posts/category/${category}`)

        dispatch({
            type:GET_POST_BY_CAT_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:GET_POST_BY_CAT_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const listPostsByLan=(language)=> async(dispatch)=>{

  

    try{
        dispatch({type: GET_POST_BY_LAN_REQUEST})

        const {data} = await axios.get(`/api/posts/language/${language}`)

        dispatch({
            type:GET_POST_BY_LAN_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:GET_POST_BY_LAN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const createNewComment=(id,name,email,comment)=> async(dispatch)=>{

  

    try{
        dispatch({type: COMMENT_POST_REQUEST})

        const config = {
            headers :{
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.post(`/api/posts/comment/${id}`,{name,email,comment},config) 


        dispatch({
            type:COMMENT_POST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:COMMENT_POST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}



//update the reading

export const getTotalReading = async(id,currentReading)=>{



    const config = {
        headers :{
            'Content-Type':'application/json'
        }
    }
    const {data} = await axios.post(`/api/posts/reading/${id}`,{totalReading:currentReading},config)

    if(data){
        return await data
    }else{

        return currentReading
    }



 }

 
//CREATE a new post

export const createNewPostAction = (post)=>  async(dispatch,getState)=>{


    
    try{
        dispatch({type: CREATE_NEW_POST_REQUEST})

        const { userLogin: { userLoginInfo },} = getState()  

        const { userRegister: { userRegisterInfo },} = getState()  

        const userinfo = userLoginInfo || userRegisterInfo;

        const config = {
            headers :{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userinfo.token}`,
    
            }
        }

        const {data} = await axios.post(`/api/posts/`,post,config)


        dispatch({
            type:CREATE_NEW_POST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:CREATE_NEW_POST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
 


 }

 //Update a  post

export const updatePostAction = (post,id)=>  async(dispatch,getState)=>{


    
    try{
        dispatch({type: UPDATE_NEW_POST_REQUEST})

        const { userLogin: { userLoginInfo },} = getState()  

        const { userRegister: { userRegisterInfo },} = getState()  

        const userinfo = userLoginInfo || userRegisterInfo;

        const config = {
            headers :{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userinfo.token}`,
    
            }
        }

        const {data} = await axios.put(`/api/posts/${id}`,post,config)


        dispatch({
            type:UPDATE_NEW_POST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:UPDATE_NEW_POST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
 


 }



 //delete a post
export const deletePostAction = (id)=>  async(dispatch,getState)=>{


    
    try{
        dispatch({type: DETETE_POST_REQUEST})

        const { userLogin: { userLoginInfo },} = getState()  

        const { userRegister: { userRegisterInfo },} = getState()  

        const userinfo = userLoginInfo || userRegisterInfo;

        const config = {
            headers :{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userinfo.token}`,
    
            }
        }

        const {data} = await axios.delete(`/api/posts/${id}`,config)


        dispatch({
            type:DETETE_POST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:DETETE_POST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
 


 }