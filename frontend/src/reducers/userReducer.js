import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";



export const userLoginReducer = (state={} ,action)=>{

    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loginLoading:true}

        case USER_LOGIN_SUCCESS:
            return { 
                loginLoading:false,
                userLoginInfo: action.payload
            }

        case USER_LOGIN_FAIL:
            return {
                loginLoading:false,
                loginError:action.payload
            }

        case USER_LOGOUT:
                return {}
        
        default:
            return state;
    }
}



export const userRegisterReducer = (state={} ,action)=>{

    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {registerLoading:true}

        case USER_REGISTER_SUCCESS:
            return { 
                registerLoading:false,
                userRegisterInfo: action.payload
            }

        case USER_REGISTER_FAIL:
            return {
                registerLoading:false,
                registerError:action.payload
            }
        case USER_LOGOUT:
                return {}

        
        default:
            return state;
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { ...state, loading: true }


      case USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload }


      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      
      
      case USER_DETAILS_RESET:
            return { user :{}} 

      default:
        return state
    }
  }