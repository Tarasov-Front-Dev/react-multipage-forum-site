import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";

// export const privateRoutes = [
//   {path: 'https://tarasov-front-dev.github.io/react-multipage-forum-site/', element: <Login/>},
//   {path: 'https://tarasov-front-dev.github.io/react-multipage-forum-site/about', element: <About/>},
//   {path: 'https://tarasov-front-dev.github.io/react-multipage-forum-site/posts', element: <Posts/>},
//   {path: 'https://tarasov-front-dev.github.io/react-multipage-forum-site/posts/:id', element: <PostIdPage/>},
//   {path: 'https://tarasov-front-dev.github.io/react-multipage-forum-site/*', element: <Error/>},
// ]

// export const publicRoutes = [
//   {path: 'https://tarasov-front-dev.github.io/react-multipage-forum-site/login', element: <Login/>},
//   {path: 'https://tarasov-front-dev.github.io/react-multipage-forum-site/*', element:<Login/>}
// ]

export const privateRoutes = [
  {path: '/', element: <Login/>},
  {path: '/about', element: <About/>},
  {path: '/posts', element: <Posts/>},
  {path: '/posts/:id', element: <PostIdPage/>},
  {path: '/*', element: <Error/>},
]

export const publicRoutes = [
  {path: '/login', element: <Login/>},
  {path: '/*', element:<Login/>}
]