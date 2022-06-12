import React,{useState} from 'react'
import ViewBloglister from '../../components/AdminArea/ViewBloglister';
import {useSelector} from 'react-redux';
import SidebarMenu from '../../components/SidebarMenu';

function ViewBlogSreen({history}) {

    const [category,setCategoy]=useState('')
    const [language,setLanguage]=useState('')
    const [type,setType]=useState('all')

    
 
    const userLogin = useSelector((state) => state.userLogin)
    const {userLoginInfo,userRegisterInfo} = userLogin

    if(!((userLoginInfo && userLoginInfo.isAdmin) || (userRegisterInfo && userRegisterInfo.isAdmin) )){
        history.push('/adminArea/login')
    }



    return (
        <div>
            
            <SidebarMenu/>
            <div className="container">

                <div className="row mt-3">
                    <div className="col-md-6">

                        <select name="CategorySelector" className="admin_viewBlogSelect_1"  id=""
                        onChange={
                            (e)=>{
                                e.preventDefault()
                                setCategoy(e.target.value)
                                setType('category')
                            }
                        }
                        >

                                 <option value="web">Web</option>
                                 <option value="app">App</option>
                                 <option value="dsalgo">DS/Algorithom</option>
                                 <option value="cp">Competitive programming</option>
                                 <option value="aiml">AI/ML</option>
                                 <option value="oop">OOP</option>
                                 <option value="mytalk">My Talk</option>
                        </select>

                    </div>

                    <div className="col-md-6">

                        <select className="admin_viewBlogSelect_2" name="LanguageSelector" id=""  
                        onChange={
                            (e)=>{
                                e.preventDefault()
                                setLanguage(e.target.value)
                                setType('language')

                            }
                        }
                        >
                                 <option value="C++">C/C++</option>
                                 <option value="Js">Javascript</option>
                                 <option value="PHP">PHP</option>
                                 <option value="Python">Python</option>
                                 <option value="React">React/Redux</option>
                                 <option value="Nodejs">Node Js</option>
                        </select>

                    </div>
                </div>
                
                <ViewBloglister category={category} language={language} type={type} />
            </div>

            
        </div>
    )
}

export default ViewBlogSreen
