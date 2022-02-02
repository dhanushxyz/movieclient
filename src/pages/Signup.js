import React from 'react'
import { Link} from 'react-router-dom'
import  Axios  from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate();
    const [urernameReg , setusernameReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');
    const [emailReg, setemailReg] = useState('');
    const [PhoneReg, setPhoneReg] = useState('');
    const submitHandler = () =>
    {
        Axios.post('http://localhost:3001/register',{
            username: urernameReg,
            password: passwordReg,
            email: emailReg
        }).then((response)=>{
            console.log(response)
        });
        window.alert("sign in sucessful")
        navigate("/Login")
        
    };
    return (
        <>
        <div className="App">
            <div className="st">
                <div className="formhea"><b>Signup</b></div>
                <form onSubmit={submitHandler}>
                        <input className="e" type="text" onChange={(e)=>{setemailReg(e.target.value);}} placeholder="Email"/><br/>
                        <input className="u" type="text" onChange={(e)=>{setusernameReg(e.target.value);}} placeholder="Username"/><br/>
                        <input className="p" type="password" onChange={(e)=>{setpasswordReg(e.target.value);}} placeholder="Password"/><br/>
                        <input className="su" type="submit" value="submit"/>
                </form>
                <div className='sihea'>If you already have an account Login</div>
                <button className='sibutto'><Link to="/Login">login</Link></button>
            </div>
                
            </div>
            


        </>
    )
}

export default Signup
