import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/router';
import { AuthContext } from '../context/context';
import MyLoader from './UI/MyLoader/MyLoader';

const AppRouter = function() {
  let {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) return <MyLoader/>

  return(
      isAuth
        ? 
        <Routes>
          {privateRoutes.map(route =>
            <Route 
              path={route.path} 
              element={route.element} 
              key={route.path}
            />
          )}
        </Routes>
        :
        <Routes>
          {publicRoutes.map(route =>
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