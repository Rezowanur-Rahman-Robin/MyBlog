import { SideBarActive, } from "../constants/hambargerConstants";

export const setSideBarActive= (status)=> async(dispatch,getState)=>{



    

   

    

    const data={
        SidebarStatus: status
    }

  
    dispatch({
        type: SideBarActive,
        payload:data,
    })
}