import React from 'react';
import { useAuth } from './AuthContextPro';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

    const [userId,setUserId]=useState('')
    const [password,setPassword]=useState('')
    const navigator=useNavigate

    const {setCurrentUser}=useAuth()

    
    const onSubmit2 =(e)=>{
        e.preventDefault()

        let users=JSON.parse(localStorage.getItem("users")) ||[]

        const loginUser=users.find((user)=>user.userId===userId&&user.password===password)  

        if(loginUser){
            // setCurrentUser(loginUser)

            localStorage.setItem('currentUser',JSON.stringify(loginUser))

            setUserId('')
            setPassword('')

            navigator('/boardList')
        }
        else{
            alert('아이디 또는 비밀번호 오류')
        }
            
        
    }
            



    }
    return (
        <div>
            <form onSubmit={onSubmit2}>
                <h1>로그인</h1>
                아이디 : <input type='text' value={userId} onChange={(e)=>setUserId(e.target.value)}></input>
                비밀번호 : <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>

                <button type='submit'>로그인</button> 
            </form>
        </div>
    );


export default Login;