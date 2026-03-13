import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BoardList = () => {

    const[posts,setPosts]=useState([])
    const[currentUser,setCurrentUser]=useState(null)


    useEffect(()=>{

        const storedPosts=JSON.parse(localStorage.getItem('posts')) || []
        setPosts(storedPosts)

        const storedUser=JSON.parse(localStorage.getItem('currentUser')) || []
        setCurrentUser(storedUser)


    },[])

    const handleDelete=(id)=>{
        const updated=posts.filter((post)=>post.id!==id)
        setPosts(updated)

        localStorage.setItem("posts",JSON.stringify(updated))
    }
    return (
    <div>
        <h1>게시글 목록</h1>
        <Link to="/board/create">글쓰기</Link>
        
        {posts.length > 0 ? (
            posts.map((post) => (
                <div key={post.id}>
                    {/* 1. 게시글 제목 출력 (닫는 태그 수정) */}
                    <div>{post.title}</div>

                    {/* 2. 조건부 렌더링 내부에서 여러 태그를 쓸 때는 반드시 <></> 로 감싸야 함 */}
                    {currentUser && currentUser.userId === post.writerId && (
                        <>
                            <Link to={`/board/edit/${post.id}`}>수정</Link>
                            <button onClick={() => handleDelete(post.id)}>삭제</button>
                        </>
                    )}
                </div>
            ))
        ) : (
            <p>게시글이 없습니다.</p> // posts가 없을 때 보여줄 화면 추가
        )}
    </div>
);
}
export default BoardList