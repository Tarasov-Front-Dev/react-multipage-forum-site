import React, { useState } from "react";
import MyButton from './UI/MyButton/MyButton';
import MyInput from './UI/MyInput/MyInput';

function PostForm({create}) {
  let [post, setPost] = useState({title: '', body: ''})
  
  function _onInput() {
    const form = document.querySelector('form')
    if ([...form.querySelectorAll('input')].every(input => input.value)) form.submit.disabled = false
    else form.submit.disabled = true;
  }

  function _onSubmit(evt) {
    const form = document.querySelector('form')
    evt.preventDefault();
    _addNewPost();
    form.submit.disabled = true;
  }
  
  function _addNewPost() {
    const newPost = {
      ...post,
      id: [...Date.now().toString()].splice(0, 3).join(''),
      date: Date.now(),
    }
    create(newPost);
    setPost({title: '', body: ''});
  }

  return (    
    <form 
    onInput = {() => _onInput()}
    onSubmit = {(evt) => _onSubmit(evt)}>

    <MyInput
      value = {post.title}
      name = 'title'
      type = 'text' 
      placeholder = 'Post title'
      onInput = {(evt) => setPost({...post, title: evt.target.value})}
    />
    <MyInput
      value = {post.body}
      name = 'body'
      type = 'text' 
      placeholder = 'Post description'
      onInput = {(evt) => setPost({...post, body: evt.target.value})}
    />
    <MyButton name = 'submit' disabled>Publish Post</MyButton>

  </form>
  )
}

export default PostForm;