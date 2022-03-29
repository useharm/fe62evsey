import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import CurrentPost from '../pages/CurrentPost';

const NavRouter = () => {
    return (
        <div>
    <Routes>
      <Route path='about' element={<About />} />
      <Route exact path='posts' element={<Posts />} />
      <Route exact path='' element={<Posts />} />
      <Route path='*' element={<Error />} />
      <Route exact path='posts/:id' element={<CurrentPost />}/>
      <Route path="/" element={<Navigate replace to="/posts" />} />
    </Routes>
        </div>
    );
};

export default NavRouter;