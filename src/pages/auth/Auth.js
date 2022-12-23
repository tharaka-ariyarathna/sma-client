import React, { useState } from 'react' ;
import './Auth.css' ;
import Logo from '../../img/logo.png' ;
import {useDispatch, useSelector} from 'react-redux' ;
import { login, signUp } from '../../actions/AuthActions';

const SignUp = () => {
    const dispatch = useDispatch() ;
    const loading = useSelector(state => state.Authreducer.loading) ;

    const [isSignedUp, setIsSignedUp] = useState(true) ;

    const [data, setData] = useState({
        firstname : "",
        lastname : "",
        username : "",
        password : "",
        confirmPassword : ""
    })

    const [confirmPass, setConfirmPass] = useState(true) ;

    const handleInputChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault() ;

        if(!isSignedUp){
            data.password === data.confirmPassword 
            ? dispatch(signUp(data)) 
            : setConfirmPass(false) ;
        }else{
            dispatch(login(data)) ;
        }
    }

    const resetForm = () => {
        setConfirmPass(true) ;
        setData({
            firstname : "",
            lastname : "",
            username : "",
            password : "",
            confirmPassword : ""
        })
    }

    return(
        <div className='a-right'>
            <form className='infoForm loginForm' onSubmit={handleFormSubmit}>
                <h3>{isSignedUp? "Login" : "Sign Up"}</h3>
                {!isSignedUp &&  <div >
                    <input 
                    type='text'
                    className='infoInput'
                    placeholder='First Name'
                    name='firstname'
                    onChange={handleInputChange}
                    value={data.firstname}
                    />
                    <input 
                        type='text'
                        className='infoInput'
                        placeholder='Last Name'
                        name='lastname'
                        onChange={handleInputChange}
                        value={data.lastname}
                    />
                </div>}
                <div>
                    <input 
                        type='text'
                        className='infoInput'
                        placeholder='Username'
                        name='username'
                        onChange={handleInputChange}
                        value={data.username}
                    />
                </div>
                <div>
                    <input 
                        type='password'
                        className='infoInput'
                        placeholder='Password'
                        name='password'
                        onChange={handleInputChange}
                        value={data.password}
                    />
                    {!isSignedUp && <input 
                        type='password'
                        className='infoInput'
                        placeholder='Confirm Password '
                        name='confirmPassword'
                        onChange={handleInputChange}
                        value={data.confirmPassword}
                    />}
                </div>

                <span 
                    style={{display: confirmPass? "none" : "block",  color:"red",
                    fontSize:"12px", margin:"5px",marginRight:"5%", alignSelf:"self-end"}}
                >
                    ∗ Password doesn't match
                </span>

                <div>
                    <span style={{fontSize:'12px', cursor:'pointer'}} onClick={()=>{
                        setIsSignedUp(prev => !prev) ;
                        resetForm() ;
                    }}>
                        {isSignedUp? "Don't have an account, Sign In!" : "Already have an account. Login!"}
                    </span>
                </div>

                <button className='button infoButton' type='submit' disabled={loading}>
                    {loading? "Loading" : isSignedUp? "Login" : "Sign up"}
                </button>
            </form>
        </div>
    ) ;
}

const auth = () => {
  return (
    <div className='auth'>
        <div className='a-left'>
            <img src={Logo} />
            <div className='webname'>
                <h1>SOCIAL MEDIA</h1>
                <h6>Feel seconds away from your friends</h6>
            </div>
        </div>

        <SignUp/>
    </div>
  ) ;
}

export default auth ;
