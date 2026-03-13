import React, { useEffect, useState } from 'react';

const MemberList = () => {
    const users=JSON.parse(localStorage.getItem('users'))

    const [currentUser,setCurrentUser]=useState(null)

    useEffect(()=>{
        const storedUser=JSON.parse(localStorage.getItem("currentUser"))
        setCurrentUser(storedUser)
    },[])

    return (
        <div>
            <h1>회원 목록</h1>
            {currentUser && currentUser.userId==='admin'&& currentUser.password==='admin' ?(
                <ul>
                    {users.length>0 ? (
                        users.map((user,index)=> <li key={index}>{user.userId}</li>)
                        ):(
                            <li>회원 없다</li>
                        )}
                </ul>

                    ) :(
                        <div>
                            <div>회원목록은 관리자만 볼 수 있습니다</div>

                        </div>

                    )
            }
            
        </div>
    );
};

export default MemberList;