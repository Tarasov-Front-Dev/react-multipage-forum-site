import React from "react";
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/MySelect/MySelect";

const PostFilter = ({filter, setFilter, options}) => {

  const sortPosts = (value) => {
    setFilter({...filter, sort: value})
  }
  
  return (
    <div className="postFilter">      
      <MyInput
          placeholder='Search:'
          onKeyUp={(evt) => setFilter({...filter, query: evt.target.value})}
      />
      <MySelect
        options={options} 
        defaultValue={'disabled'}
        sortPosts={sortPosts}
      />
    </div>
  )
}

export default PostFilter;