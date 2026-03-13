import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBoard = () => {
    const {id}=useParams()

    const[post,setPost]=useState({title:'', content:''})
    const navigator=useNavigate()

    useEffect(()=>{
        const posts=JSON.parse(localStorage.getItem('posts')) || []
        const currentPost=posts.find((p)=>parseInt(id)===p.id)
        if(currentPost){
            setPost(currentPost)
        }
    },[id])

    const onSubmit1=(e)=>{
        e.preventDefault()

        let posts=JSON.parse(localStorage.getItem('posts'))|| []

        posts=posts.map((p)=>p.id===parseInt(id)?{...post, writerId: p.writerId}:p)

        localStorage.setItem('posts',JSON.stringify(posts))
        navigator('/boardList')
    }
    return (
        <div>
            <h1>게시글 수정</h1>
            <form onSubmit={onSubmit1}>
                 <input value={post.title} onChange={(e)=>setPost({...post,title:e.target.value})}></input>
                 <textarea value={post.content} onChange={(e)=>setPost({...post,content:e.target.value})}></textarea>

                 <button>수정</button>
            </form>
        </div>
    );
};

export default EditBoard;