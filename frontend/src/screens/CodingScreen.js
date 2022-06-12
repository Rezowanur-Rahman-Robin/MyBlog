import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPostsByCat } from '../actions/postAction'
import MenuDesc from '../components/MenuDesc'
import PageWrapper from '../components/PageWrapper'
import SidebarMenu from '../components/SidebarMenu'

function CodingScreen() {

    const dispatch=useDispatch()

    const categorizedPostList=useSelector((state)=> state.categorizedPostList)

    const {posts}=categorizedPostList;

    useEffect(()=>{
        dispatch(listPostsByCat('কোডিং'));
    },[dispatch])



    return (
        <div className="coding__screen">
             <SidebarMenu/>
             <MenuDesc />

             <PageWrapper posts={posts} />
        </div>
    )
}

export default CodingScreen
