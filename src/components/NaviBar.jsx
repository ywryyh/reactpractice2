import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContextPro';

const NaviBar = () => {

    const{currentUser,logout}=useAuth()
    const navigator=useNavigate()

    const logout1=()=>{
        logout()
        navigator('/')

    }





    return (
       <nav className='bg-amber-200 shadow-slate-500'> 
       <Link to="/">홈</Link>
       <Link to="/memberList">회원목록</Link>
       <Link to="/boardList">게시글 목록</Link>
       
       {!currentUser&&(
        <>
            <Link to="/login">로그인</Link>
            <Link to="/join">회원가입</Link>
       
       </>
       )}
       :{currentUser &&(
        <>
            <span>{currentUser.userId}님</span>
            <button onClick={logout1}>로그아웃</button>
        </>
       )} 
       </nav>
    );
};

export default NaviBar;