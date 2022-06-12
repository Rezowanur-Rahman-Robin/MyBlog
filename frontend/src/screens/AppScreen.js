import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPostsByCat } from '../actions/postAction'
import MenuDesc from '../components/MenuDesc'
import PageWrapper from '../components/PageWrapper'
import SidebarMenu from '../components/SidebarMenu'

function AppScreen() {

    const dispatch=useDispatch()

    const categorizedPostList=useSelector((state)=> state.categorizedPostList)

    const {posts}=categorizedPostList;

    useEffect(()=>{
        dispatch(listPostsByCat('অ্যাপস'));
    },[dispatch])





    return (
        <div className="app__screen">
             <SidebarMenu/>
             <MenuDesc />

             <PageWrapper  posts={posts} />
        </div>
    )
}

export default AppScreen
