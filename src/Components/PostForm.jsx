import React, {useState} from 'react';
import Mybutton from "./UI/button/Mybutton";
import MyInput from "./UI/input/Myinput";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body: ''})
    }
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста поста"/>
            <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
        </form>

    );
};

export default PostForm;