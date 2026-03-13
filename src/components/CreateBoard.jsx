import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type } from './../../node_modules/cookie/dist/index.d';

const CreateBoard = () => {
    //1.제목상태 초기화
    const [title,setTitle]=useState('')
    //2.내용상태 초기화
    const [content,setContent]=useState('')    
    //3.네비게이트(코드내에서 페이지이동)
    const navigator=useNavigate()

    //로컬스토리지에서 로그인한 사용자 정보
    //로그인한 인간만 게시글 작성하게끔 할거임
    const currentUser=JSON.parse(localStorage.getItem('currentUser'))
    //currentuser가 false면 alert->로그인 ㄱㄱ
    //                     /login
    useEffect(()=>{
        if(!currentUser){
            alert("로그인필요")
            navigator('/login')
        }
    },[])    

    //4.onSubmit1 구현 ->새로고침 방지
    const onSubmit1=(e)=>{
        e.preventDefault()

        //const post={id:Date.now(), title, content}

    //4.1 로컬스토리지에서 내가 쓴 제목과 내용을 읽어와서 posts에 저장 /근데 만약에 없으면 내가 쓴 제목,내용이 없으면 []
    let posts=JSON.parse(localStorage.getItem("posts")) || []

    const newPost={
        id:Date.now(),
        title,
        content,
        writerId:currentUser.userId, //현재 로그인한 사용자 아이디 추가해서 넣음
    }
    posts.push(newPost)
    //4.2 로컬스토리지에 내가 쓴 제목과 내용을 저장(키 이름 :posts)
    localStorage.setItem("posts",JSON.stringify(posts))

    setTitle('')
    setContent('')

    navigator('/boardList')
    }
    return (
        <div>
            <h1>게시글작성</h1>
            <form onSubmit={onSubmit1}>
                제목 : <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                내용 : <textarea value={content} onChange={(e)=>setContent(e.target.value)}/>
                <button type='submit'>작성완료</button>
            </form>
            
        </div>
    );
};

export default CreateBoard;
//form으로 onsubmit으로 넘김
            //제목 input - title  내용 textarea -content

            //버튼명 작성완료