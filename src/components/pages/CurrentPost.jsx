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
            <div><h1>Название задачи: </h1>{post.map(prev => <div>{prev.title}</div>)}</div>
            <div><h1>Описание описание: </h1>{post.map(prev => <div>{prev.body}</div>)}</div>
            <MyButton onClick={() => back()}>Назад</MyButton>
        </div>
    )
            }
export default CurrentPost;