import React, { useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../actions/userAction';
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import SidebarMenu from '../components/SidebarMenu';
import { Link } from 'react-router-dom';



function LoginScreen({location, history}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [action,setAction] = useState('Sign In');
    const [alreadyHave,setAlreadyHave] = useState('Create One');
  
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const {loginLoading,loginError,userLoginInfo} = userLogin


    const userRegister = useSelector((state) => state.userRegister)
    const {registerLoading,registerError,userRegisterInfo} =userRegister

    console.log(location)

    // const redirect = location.search ? location.search.split('=')[1] : '/'

    // useEffect(() => {
    //   if (userInfo) {
    //     history.push(redirect)
    //   }
    // }, [history, userInfo, redirect])


    if(( (userLoginInfo && userLoginInfo.isAdmin) || (userRegisterInfo && userRegisterInfo.isAdmin) )){
     history.push('viewBlog')
    }

    const override = css`
    display: block;
    margin-top:30px;
    margin-left:auto;
    margin-right:auto;
    border-color: white;
    color:white;
  `;

    

    const changeSignInState=(e)=>{

        e.preventDefault()


        if(action==='Sign In'){
            setAction('Register');
        }else{
            setAction('Sign In');

        }

        if(alreadyHave==='Create One'){
            setAlreadyHave('Sign In');
        }else{
            setAlreadyHave('Create One');

        }  
    }

    // if(userLoginInfo || userRegisterInfo){

    //     history.push('viewBlog')

    // }


   
  

    const registerOrLoginAction =(e)=>{
         e.preventDefault();


        if(action==='Sign In'){
            // console.log('Sign In Action');
            dispatch(login(email,password))

            
        }else{
            dispatch(register(name,email,password))
          
        }

    }

    return (
        <>
        
        <SidebarMenu/>

<div class="global-container " style={{width:"60%", margin:'20px auto'}}>
	<div class="card login-form" style={{color:'white',backgroundColor: '#f44336'}}>
	<div class="card-body">
		<h3 class="card-title text-center">Log in to Admin Panel</h3>
		<div class="card-text">
      {(loginError || registerError) && <div class="alert alert-danger alert-dismissible fade show" role="alert"> {loginError || registerError} </div> }
			<form>

              {action!=='Sign In' && (<div class="form-group">
                    <div class="row">
                        <div class="col-sm-4">
                        <label >Name:</label>

                        </div>

                        <div class="col-sm-8">
                        <input type="text" class="form-control form-control-sm" 
                        onChange={
                            (e)=> {
                                e.preventDefault();
                                setName(e.target.value);
                            }
                        }
                        />

                        </div>
                    </div>
				</div>)}

				<div class="form-group">
                    <div class="row">
                        <div class="col-sm-4">
                        <label >Email address:</label>

                        </div>

                        <div class="col-sm-8">
                        <input type="email" class="form-control form-control-sm" 
                         onChange={
                            (e)=> {
                                e.preventDefault();
                                setEmail(e.target.value);
                            }
                        }
                        />

                        </div>
                    </div>
				</div>

				<div class="form-group">
                    <div class="row">
                        <div class="col-sm-4">
                        <label >Password:</label>

                        </div>
                        <div class="col-sm-8">
                        <input type="password" class="form-control form-control-sm" 
                         onChange={
                            (e)=> {
                                e.preventDefault();
                                setPassword(e.target.value);
                            }
                        }
                        />

                        </div>
                    </div>
				</div>
                {action === 'Sign In'? (<Link  style={{float:'right',ontSize: '14px', color: '#ffffff',fontWeight: '500' }}>Forgot password?</Link>) : ("")} 

				<button href='' type="submit" class="btn btn-primary btn-block" style={{margin: '20px'}} onClick={registerOrLoginAction}> {action} </button> <br/>
                {(loginLoading || registerLoading) &&  <DotLoader color={'#f44336'} loading={loginLoading || registerLoading} css={override}  />}
				
				<div class="sign-up">
					{action==='Sign In'? ("Don't have an account?") : ("Already have an account?")} <Link style={{fontSize:'16px',fontWeight:"500"}} onClick={changeSignInState}>{alreadyHave} </Link>
				</div>
			</form>
		</div>
	</div>
</div>
</div>  

</>
        
    )
}

export default LoginScreen
