import React, { useState,  useEffect } from 'react';
import PostList from '../PostList'
import PostForm from '../PostForm'
import PostService from '../asyncActions/PostService';
import { useDispatch, useSelector } from 'react-redux';

function Posts(props) {

  const posts = useSelector((state) => state.posts.posts);

  return(
    <div className='App'>
        <PostForm />
        {posts.length 
        ? <PostList />
        : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
        
      </div>
    )
}

export default Posts;
