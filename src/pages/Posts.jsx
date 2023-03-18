import React, { useEffect, useState } from 'react';
import './Posts.css';
import Counter from './../components/Counter';
import PostForm from './../components/PostForm';
import PostFilter from './../components/PostFilter';
import PostList from './../components/PostList';
import MyModal from './../components/UI/MyModal/MyModal';
import MyButton from './../components/UI/MyButton/MyButton';
import { usePosts } from './../components/hooks/usePosts';
import PostService from '../API/PostService';
import MyLoader from './../components/UI/MyLoader/MyLoader';
import { useFetching } from './../components/hooks/useFetching';
import {getPagesCount, getPagesArray } from './../utils/getPagesCount';
import MyPagination from './../components/UI/MyPagination/MyPagination';

const Posts = function() {
  const [options, setOptions] = useState([
    // {name: 'date', value: 'date', description: 'By date ↑'},
    {name: 'id', value: 'id', description: 'By order ↓'},
    {name: 'title', value: 'title', description: 'By title ↓'},
    {name: 'body', value: 'body', description: 'By body ↓'},
  ]);

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal] = useState(false)
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setTotalCount(response.headers['x-total-count'])
    setTotalPages(getPagesCount(totalCount, limit))
    setPosts(response.data)
  })

  useEffect(() => {
    fetchPosts()    
  }, [page])

  const createPost = (newPost) => {
    setPosts([newPost, ...posts])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  return (
    <div className = "App">
      {/* <Counter/> */}
      {/* <hr/> */}
      <main>
        <MyButton 
          onClick={() => setModal(true)}
          onSubmit={(evt) => evt.preventDefault()}
          name='new-post'
          >Write a post!
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>        
          <PostForm create={createPost}/>
        </MyModal>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
          options={options}
        />
        <MyPagination
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
        {postError && <h1>Error: {postError}</h1>}
        {isPostsLoading
          ? <MyLoader/>
          : <PostList
            posts = {searchedAndSortedPosts}
            title = 'JavaScript'
            remove={removePost}
            />
        }
      </main>
    </div>
  )
}

export default Posts;