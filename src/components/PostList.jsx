import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem'
const PostList = ({ title, remove, openP}) => {
    const posts = useSelector((state) => state.posts.posts)
    return (
        <div>
        <h1 style={{textAlign: 'center'}}>
            {title}
        </h1>
         {posts.map((heh, index) => (
        <PostItem  number={index + 1} post={heh} key={heh.id}/>
      ))}
        </div>
    );
};

export default PostList;