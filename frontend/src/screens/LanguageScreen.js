import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listPostsByLan } from '../actions/postAction';
import MenuDesc from '../components/MenuDesc';
import PageWrapper from '../components/PageWrapper';
import SidebarMenu from '../components/SidebarMenu';

function LanguageScreen({match}) {

    const dispatch=useDispatch()

    const languagedPostList=useSelector((state)=> state.languagedPostList)

    const {posts}=languagedPostList;

    useEffect(()=>{
        dispatch(listPostsByLan(match.params.lan_type));
    },[dispatch,match])

    return (
        <div className="language__screen">
             <SidebarMenu/>
             <MenuDesc />

             <PageWrapper posts={posts} />
            
        </div>
    )
}

export default LanguageScreen
