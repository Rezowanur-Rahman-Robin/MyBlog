import { SideBarActive,  } from "../constants/hambargerConstants";


export const hamburgerMenuReducer=(state={SidebarStatus:false},action)=>{

switch(action.type){
    case SideBarActive:
        return{
            SidebarStatus:action.payload.SidebarStatus,
        }

    default:
        return state
}

}