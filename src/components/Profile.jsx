import React from 'react';
import {useAuth} from '../Hook/useAuth';

const Profile = () => {
    const {user ,logout}=useAuth
    return (
        <div>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
};

const {user ,logout}=useAuth
export default Profile;