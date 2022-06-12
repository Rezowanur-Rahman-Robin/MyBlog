import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPostsByCat } from '../actions/postAction'
import MenuDesc from '../components/MenuDesc'
import PageWrapper from '../components/PageWrapper'
import SidebarMenu from '../components/SidebarMenu'

function MyTalkScreen() {

    const dispatch=useDispatch()

    const categorizedPostList=useSelector((state)=> state.categorizedPostList)

    const {posts}=categorizedPostList;

    useEffect(()=>{
        dispatch(listPostsByCat('mytalk'));
    },[dispatch])


    return (
        <div className="myTalk__screen">
             <SidebarMenu/>
             <MenuDesc />

             <PageWrapper posts={posts} />
        </div>
    )
}

export default MyTalkScreen
