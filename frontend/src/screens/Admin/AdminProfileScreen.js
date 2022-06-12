import React from 'react'
import {useSelector} from 'react-redux';
import SidebarMenu from '../../components/SidebarMenu';


function AdminProfileScreen({history}) {


    const userLogin = useSelector((state) => state.userLogin)
    const {userLoginInfo,userRegisterInfo} = userLogin

    if(!((userLoginInfo && userLoginInfo.isAdmin) || (userRegisterInfo && userRegisterInfo.isAdmin) )){
        history.push('/adminArea/login')
    }



    return (<>
    
    <SidebarMenu/>
        <div className="admin__profile__screen">
        <h2>admin__profile__screen</h2>
        <h2>admin__profile__screen</h2>
        <h2>admin__profile__screen</h2>
        <h2>admin__profile__screen</h2>
        <h2>admin__profile__screen</h2>
        <h2>admin__profile__screen</h2>
        <h2>admin__profile__screen</h2>
        
            
        </div>

        </>
    )
}

export default AdminProfileScreen
