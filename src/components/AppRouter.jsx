import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/router';
import { AuthContext } from '../context/context';

const AppRouter = function() {
  let {isAuth, setIsAuth} = useContext(AuthContext)

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