import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { useDispatch, useSelector } from 'react-redux'
import { setSideBarActive } from '../actions/hambargerAction';
import { logout } from '../actions/userAction';


function Menu() {


    const dispatch = useDispatch()

    const sidebar = useSelector((state) => state.sidebar)
    const {SidebarStatus}=sidebar

    const userLogin = useSelector((state) => state.userLogin)
    const {userLoginInfo,userRegisterInfo} = userLogin




    const hamburgerClass=SidebarStatus? 'remove':'';



    const logoutHandler =()=>{
        dispatch(logout())
    }




    return (
        <div className='menu'>
            <div className="header-area" id="sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-7">
                            <div className="log-area">
                                <Link to="/">

                                    <div className="header-logo">
                                        <img alt='' src={logo} /> 
                                        <h2 style={{color:"#ffffff"}}> রবিনের রাফখাতা</h2>

                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="menu-area white">
                                <nav>
                                    <ul>
                            {(userLoginInfo && userLoginInfo.isAdmin) || (userRegisterInfo && userRegisterInfo.isAdmin) ? (

                                <> 
                                
                                <li className="active sub">
                                <Link to="/"> Dashboard </Link>
                                
                               </li>

                            <li><Link to="/">Blogs</Link>
                                <ul className="sub_menu">
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
                                <ul className="sub_menu">
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
                         
                            <li><Link to="/">Languages</Link>
                                <ul className="sub_menu">
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

                        <div class="col-md-1 col-xs-5">
                    <div class="humbargar-area" onClick={ ()=> dispatch(setSideBarActive(true))}>
                        <div class="menu-icon text-right">
                            <span class={`flaticon-menu humbargar color ${hamburgerClass}`}></span>
                        </div>
                        <div class="close-area">
                            <span class="close"></span>
                        </div>
                    </div>
                </div>

                    </div>
                </div>
            </div>



        </div >
    )
}

export default Menu
