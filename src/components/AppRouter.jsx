import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import Error from '../pages/Error';
import { routes } from '../router/router';

const AppRouter = function() {
  return(
    <Routes>
      {routes.map(route =>
        <Route 
          path={route.path} 
          element={route.element} 
          key={route.path}
        />
      )}
    </Routes>
  )
}

export default AppRouter;