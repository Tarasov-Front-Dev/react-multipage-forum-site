import React, { useRef, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const PostItem = function(props) {
  // const getDate = () => {
  //   let date = new Date(props.post.date)
  //   let year = date.getFullYear()
  //   let month = date.getMonth()
  //   let day = date.getDate()
  //   let hours = date.getHours()
  //   let minutes = date.getMinutes()
  //   let diffMs = new Date() - date
  //   let diffSec = Math.round(diffMs / 1000)
  //   let diffMin = Math.round(diffSec / 60)
  //   let diffHour = Math.round(diffMin / 60)
  
  //   month = month < 10 ? '0' + month : month;
  //   day = day < 10 ? '0' + day : day;
  //   hours = hours < 10 ? '0' + hours : hours;
  //   minutes = minutes < 10 ? '0' + minutes : minutes;

  //   if (diffSec < 1) {
  //     return 'right now';
  //   } else if (diffMin < 1) {
  //     return `${diffSec} sec ago`
  //   } else if (diffHour < 1) {
  //     return `${diffMin} min ago`
  //   } else {
  //     return `${year}-${month}-${day} at ${hours}:${minutes}`
  //   }
  // }
  const [isFavorite, setFavorite] = useState(false)
  const ref = useRef();
  const postTitle = props.post.title[0].toUpperCase() + props.post.title.slice(1);
  const postBody = props.post.body[0].toUpperCase() + props.post.body.slice(1);

  const navigate = useNavigate()

  const openPost = (e) => {
    if (e.target.tagName === 'BUTTON') return;
    navigate(`/posts/${props.post.id}`)
  }


  // const openPost = () => {
  //   redirect(`/posts/${props.post.id}`)
  // }

  return (
    <div className="post" ref={ref}>
      <div className="post__content">
        {/* <h4>{props.post.id}. {props.post.title}</h4> */}
        <h4 onClick={(e) => openPost(e)}>{postTitle}</h4>
        <p onClick={(e) => openPost(e)}>
          {postBody}
        </p>
        <p className="post__id">Post id: #{props.post.id}</p>
        {/* <p>Posted: {getDate()}</p> */}
      </div>
      <div className="post__btns">
        <button 
          onClick={(e) => {
            setFavorite(ref.current.classList.toggle('post--fav'))
          }}          
          className='upvote'
        >Like!</button>
        <button 
          onClick={(e) => {
            props.remove(props.post)
          }}        
          className='remove'
        >Delete</button>
        {isFavorite
          ? <p 
          className="like"
          onClick={() => {
            setFavorite(ref.current.classList.toggle('post--fav'))
          }}          
          >❤️</p>
          : true
        }
      </div>
    </div>
  )
}

export default PostItem;