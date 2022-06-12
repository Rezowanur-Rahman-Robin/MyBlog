import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPostsByCat } from '../actions/postAction'
import MenuDesc from '../components/MenuDesc'
import PageWrapper from '../components/PageWrapper'
import SidebarMenu from '../components/SidebarMenu'

function CategoryScreen({match}) {

    
    const dispatch=useDispatch()

    const categorizedPostList=useSelector((state)=> state.categorizedPostList)

    const {posts}=categorizedPostList;

    useEffect(()=>{
        dispatch(listPostsByCat(match.params.cat_type));
    },[dispatch,match])

    return (
        <div className="category__screen">

             <SidebarMenu/>
             
             <MenuDesc />

             <PageWrapper posts={posts} />
            
        </div>
    )
}

export default CategoryScreen
