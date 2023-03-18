import React, { useContext } from "react";
import MyInput from "../components/UI/MyInput/MyInput"
import MyButton from "../components/UI/MyButton/MyButton"
import { AuthContext } from "../context/context";

const Login = () => {
  let {isAuth, setIsAuth} = useContext(AuthContext)

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder='Login'/>
        <MyInput type="text" placeholder='Password'/>
        <div style={{width: 500}}>
          <MyButton>Login</MyButton>
        </div>
      </form>
    </div>
  )
}

export default Login;