import React from 'react';
import Board from './components/Board';
import BoardList from './components/BoardList';
import Home from './components/Home';
import NaviBar from './components/NaviBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContextPro from './components/AuthContextPro';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MemberList from './components/MemberList';
import CreateBoard from './components/CreateBoard';
import EditBoard from './components/EditBoard';


const App = () => {
  return (
    <AuthContextPro>
      <BrowserRouter>
        <NaviBar />
        <Routes>
          <Route path='/boardList' element={<BoardList/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/boardList' element={<BoardList/>}></Route>
          <Route path='/join' element={<SignUp/>}></Route>
          <Route path='/board/create' element={<CreateBoard/>}></Route>
          <Route path='/board/edit/:id' element={<EditBoard/>}></Route>
          <Route path='/memberList' element={<MemberList/>}></Route>
         
       </Routes>
      </BrowserRouter>
    </AuthContextPro>
  );
};

export default App;