import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';
import { addPostAction } from './redux/postReducer';
import { fetchPosts } from './asyncActions/PostService';

const PostForm = () => {
    const [value, setValue] = useState({title: '', body: ''});
    const dispatch = useDispatch();
    function addPost() {
        const newPost = {
            title: value.title,
            body: value.body,
            id: Date.now()
        }
        dispatch(addPostAction(newPost))
        setValue({title: '', body: ''})
    }
      
    return (
          <form className='form_btns'>
          <MyInput 
          value={value.title}
          onChange={event => setValue({...value, title: event.target.value})}
          type='text' 
          placeholder='Название задачи'>
          </MyInput>
          <MyInput 
          value={value.body}
          onChange={event => setValue({...value, body: event.target.value})}
          type='text' 
          placeholder='Описание задачи'>
          </MyInput>
          <MyButton type='button' onClick={() => addPost()}>Создать пост</MyButton>
          <MyButton type='button' onClick={() => dispatch(fetchPosts())}>Загрузить посты</MyButton>
        </form>
    );
};

export default PostForm;