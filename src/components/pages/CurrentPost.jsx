import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import MyButton from '../UI/Button/MyButton'

const CurrentPost = () => {

    const post = useSelector((state) => state.posts.post)
    const navigate = useNavigate();
    function back() {
        navigate('/posts/');
    }
    return (
        <div className='current_post'>
            <h1>Текущий пост: {post.map(prev => <div>{prev.title}</div>)}</h1>
            <h2>Описание поста: {post.map(prev => <div>{prev.body}</div>)}</h2>
            <MyButton onClick={() => back()}>Назад</MyButton>
        </div>
    )
            }
export default CurrentPost;