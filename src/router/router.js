import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
  {path: 'tarasov-front-dev.github.io/', element: <Login/>},
  {path: 'tarasov-front-dev.github.io/react-multipage-forum-site/', element: <Login/>},
  {path: 'tarasov-front-dev.github.io/about', element: <About/>},
  {path: 'tarasov-front-dev.github.io/posts', element: <Posts/>},
  {path: 'tarasov-front-dev.github.io/posts/:id', element: <PostIdPage/>},
  {path: 'tarasov-front-dev.github.io/*', element: <Error/>},
]

export const publicRoutes = [
  {path: 'tarasov-front-dev.github.io/login', element: <Login/>},
  {path: 'tarasov-front-dev.github.io/*', element:<Login/>}
]