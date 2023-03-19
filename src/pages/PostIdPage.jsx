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
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return(
    <div className='post__id__page'>
      {isLoading
        ? <MyLoader/>
        : <div className='post__section'>
            <h1>Post:</h1>
            <h2>{postTitle}</h2>
            <div style={{marginTop: '15px'}}>{postBody}</div>
          </div>
      }
      {isCommLoading
        ? <MyLoader/>
        : <section className='comment__section'>
            <h2>Comments:</h2>
            <div className='comments'>
              {comments.map(comm => {
                const commBody = comm.body[0].toUpperCase() + comm.body.slice(1);
                return (
                <div key={comm.id}>
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