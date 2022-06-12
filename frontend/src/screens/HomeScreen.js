import React from 'react'
import MenuDesc from '../components/MenuDesc'
import PageWrapper from '../components/PageWrapper'
import SidebarMenu from '../components/SidebarMenu'


function HomeScreen() {
    return (
        <div className="home_screen">


             <SidebarMenu/>
             <MenuDesc />

             <PageWrapper/>

             

        </div>
    )
}

export default HomeScreen
