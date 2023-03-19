import  React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from './PostItem';

const PostList = ((props) => {
  if (!props.posts.length) return <h2>Not enough posts..</h2>

  return (
    <div className="PostList">
      <h1 style={{marginBottom: '24px'}}>{props.title}</h1>
      <TransitionGroup className="todo-list">
        {props.posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={props.remove} post={post}/>
          </CSSTransition>
        ))}        
      </TransitionGroup>
    </div>
  )
})

export default PostList;