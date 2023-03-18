import React from "react";

const MySelect = function({options, defaultValue, sortPosts}) {
  return (
    <div className='sorting'>
      <select 
        name="sort"
        defaultValue={defaultValue}
        onChange={(evt) => {
          sortPosts(evt.target.value)
        }}
      >
        <option disabled name='disabled' value='disabled'>Sort:</option>
        {options.map(option =>
          <option value={option.value} name={option.name} key={option.value}>{option.description}</option>
        )}
      </select>
    </div>
  )
}

export default MySelect;