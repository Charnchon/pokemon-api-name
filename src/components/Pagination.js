import React from 'react'

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </>
  )
}

export default Pagination