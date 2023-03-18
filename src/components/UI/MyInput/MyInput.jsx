import React from "react";
import css from './MyInput.module.css'

const MyInput = (props) => {
  return (
    <input className={css.MyInput} {...props}/>
  )
}

export default MyInput;