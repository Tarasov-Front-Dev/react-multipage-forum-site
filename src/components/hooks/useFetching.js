import { useState } from "react";

export const useFetching = (callback) => {
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [postError, setPostError] = useState('');

  const fetching = async (...args) => {
      try {
          setIsPostsLoading(true)
          await callback(...args)
      } catch (e) {
          setPostError(e.message);
      } finally {
          setIsPostsLoading(false)
      }
  }

  return [fetching, isPostsLoading, postError]
}