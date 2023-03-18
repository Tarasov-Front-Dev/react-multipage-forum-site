import { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
  
  const sortedPosts = useMemo(() => {
    if (!sort) return posts;
    return [...posts.sort((a, b) => {
      if (sort === 'date') {
        let aDate = new Date(a[sort]).getTime();
        let bDate = new Date(b[sort]).getTime();
        return bDate - aDate
      } else if (sort === 'id') {
        return a[sort] - b[sort]
      } else {
        return a[sort].localeCompare(b[sort])
      }
    })]
  }, [posts, sort])

  return sortedPosts
}


export const usePosts = (posts, sort, query) => {  
  const sortedPosts = useSortedPosts(posts, sort)

  const searchedAndSortedPosts = useMemo(() => {
    if (!query) return sortedPosts;
    return sortedPosts.filter(post => {
      const postTitle = post.title.toLowerCase();
      const postBody = post.body.toLowerCase();    
      const searchValue = query.toLowerCase();

      return postBody.includes(searchValue) || postTitle.includes(searchValue)
    })
  }, [sortedPosts, query])

  return searchedAndSortedPosts
}