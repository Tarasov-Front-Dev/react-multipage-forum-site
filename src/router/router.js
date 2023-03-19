import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
  {path: 'react-multipage-forum-site/', element: <Posts/>},
  {path: 'react-multipage-forum-site/about', element: <About/>},
  {path: 'react-multipage-forum-site/posts', element: <Posts/>},
  {path: 'react-multipage-forum-site/posts/:id', element: <PostIdPage/>},
  {path: 'react-multipage-forum-site/*', element: <Error/>},
]

export const publicRoutes = [
  {path: 'react-multipage-forum-site/login', element: <Login/>},
  {path: 'react-multipage-forum-site/*', element:<Login/>}
]