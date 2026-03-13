import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [userId,setUserId]=useState('')
    const [password,setPassword]=useState('')
    const navigator=useNavigate()
    
    const onSubmit1 =(e)=>{
        e.preventDefault()

        const user={userId,password} //입력한 값을 객체로 담음

        let users=JSON.parse(localStorage.getItem("users")) ||[]
        users.push(user) //처음에는 빈배열이므로 빈배열에 푸쉬(삽입)

        localStorage.setItem("users",JSON.stringify(users))
        //빈배열에 추가한 userId, password를 로컬스토리지에 저장
        setUserId('')
        setPassword('')
        
        navigator('./login')
    }
    
    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={onSubmit1}>
                아이디 : <input type='text' value={userId} onChange={(e)=>setUserId(e.target.value)}></input>
                비밀번호 : <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>

                <button type='submit'>회원가입</button> 
            </form>
        </div>
    );
};

export default SignUp;