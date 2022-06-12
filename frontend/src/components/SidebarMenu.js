import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSideBarActive } from '../actions/hambargerAction'
import { logout } from '../actions/userAction'


function SidebarMenu() {

    const dispatch = useDispatch()

    const sidebar = useSelector((state) => state.sidebar)
    const {SidebarStatus}=sidebar

    const sidebarMenuClass= SidebarStatus? 'highlight':'';
    const closeAreaClass=SidebarStatus? 'active':'';

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin


    const logoutHandler =()=>{
        dispatch(logout())
    }




    return (
       
            <div className={`sidebar-menu ${sidebarMenuClass}`}>
        <div className={`close-area ${closeAreaClass}`} onClick={()=> dispatch(setSideBarActive(false))}>
            <span className="close"><i className="icon fa fa-times-circle"></i></span>
        </div>
        <div className="main-menu ">
            <nav>
                <ul>
                {userInfo ? (

<> 

<li className=" sub">
<Link to="/"> Dashboard </Link>

</li>

<li><Link to="/adminArea/viewBlog">Blogs</Link>
<ul className="">
<li>
                                        <Link 
                                            to="/adminArea/viewBlog">View Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to="/adminArea/createBlog">
                                            Create Blog</Link>
                                    </li>
   


</ul>
</li>

<li >
                                <Link to="/"> Profile </Link>
                                
</li>

<li >
                                <Link onClick={logoutHandler}> Logout </Link>
                                
</li>



</>

) : (

<>

<li className="active sub">
<Link to="/">Homepage </Link>

</li>

<li>
<li><Link to="/">Blogs</Link>
<ul className="sub">
                                    <li>
                                        <Link 
                                            to="/category/web">Web</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/app">
                                            App</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/dsalgo">
                                            Ds Algorithms</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/cp">
                                            Competitive Programming</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/alml">
                                            AI/ML</Link>
                                    </li>

                                    <li>
                                        <Link to="/category/oop">
                                            O O P</Link>
                                    </li>

                                    <li>
                                        <Link to="/category/others">
                                            Others</Link>
                                    </li>


</ul>
</li>


</li>

<li><Link to="/languages">Languages</Link>
<ul className="sub">
<li>
                                        <Link 
                                            to="/language/C++">C/C++</Link>
                                    </li>
                                    <li>
                                        <Link to="/language/PHP">
                                            PHP</Link>
                                    </li>
                                    <li>
                                        <Link to="/language/Js">
                                            JavaScript</Link>
                                    </li>
                                    <li>
                                        <Link to="/language/React">
                                            React/Redux</Link>
                                    </li>
                                    <li>
                                        <Link to="/language/Nodejs">
                                            Node js</Link>
                                    </li>

                                    <li>
                                        <Link to="/language/Java">
                                            Java</Link>
                                    </li>

                                    <li>
                                        <Link to="/language/Python">
                                            Python</Link>
                                    </li>


</ul>
</li>
                           <li><Link to="/category/mytalk">My Talk</Link></li>

                            <li><Link to="/contact">Contact</Link></li>
                            </>
)}
                </ul>
            </nav>
        </div>
    </div>
       
    )
}

export default SidebarMenu
