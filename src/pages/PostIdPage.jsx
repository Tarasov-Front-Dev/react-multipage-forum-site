import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import MyLoader from '../components/UI/MyLoader/MyLoader';

const PostIdPage = function() {
  const params = useParams();
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  let [postTitle, setPostTitle] = useState(null);
  let [postBody, setPostBody] = useState(null);


  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
    setPostTitle(response.data?.title[0]?.toUpperCase() + response.data?.title?.slice(1));
    setPostBody(response.data?.body[0]?.toUpperCase() + response.data?.body?.slice(1))
  })

  const [fetchComments, isCommLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommById(id)
    setComments(response.data)
  })

  useEffect(() => {
    console.log(params)
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return(
    <div>
      {isLoading
        ? <MyLoader/>
        : <div>
            <div className='post__section'>
              <h1>Post:</h1>
              <h2>{postTitle}</h2>
              <div style={{marginTop: '15px'}}>{postBody}</div>
            </div>
        </div>
      }
      {isCommLoading
        ? <MyLoader/>
        : <section className='comment__section' style={{marginTop: '25px'}}>
            <h2>Comments:</h2>
            <div className='comments' style={{marginTop: '25px'}}>
              {comments.map(comm => {
                const commBody = comm.body[0].toUpperCase() + comm.body.slice(1);
                return (
                <div style={{marginTop: '15px', backgroundColor: "whitesmoke"}} key={comm.id}>
                  <h5>{comm.email}</h5>
                  <div>{commBody}</div>
                </div>)
              })}
            </div>
          </section>
      }
    </div>
  )
}

export default PostIdPage;