import React from 'react';
import '../styles/styles.css'
import MyButton from './UI/Button/MyButton';
import {useNavigate} from 'react-router-dom'
import { openPostAction, removePostAction } from './redux/postReducer';
import { useDispatch } from 'react-redux';

const PostItem = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function removePost(post) {
       
        dispatch(removePostAction(post.id));
    }
    function openPost(post) {

        navigate(`/posts/${props.number}`);
        dispatch(openPostAction(post));
    }

    return (
        <div className="App">
            <div className="post">
                <div className="post_content">
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post_btns">
                     <MyButton onClick={() => openPost(props.post)}>открыть</MyButton>
                    <MyButton onClick={() => removePost(props.post)}>удалить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;