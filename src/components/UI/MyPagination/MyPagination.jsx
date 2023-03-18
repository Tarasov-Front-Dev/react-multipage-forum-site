import React from "react";
import { getPagesArray } from "../../../utils/getPagesCount";

const MyPagination = ({totalPages, setPage, page}) => {
  let pagesArr = getPagesArray(totalPages);
  return (
    <div className='pagination'>
      {pagesArr.map(i => 
        <span 
        onClick={() => setPage(i)}
        className={page === i ? 'current' : ''} 
        key={i}
        >
        {i}
        </span>
      )}
    </div>
  )
}

export default MyPagination