import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const RecipesPagination = (props) => {

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    let currentPage = event.selected;
    let newPage = ++currentPage;
    props.paginate(newPage);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        forcePage={(props.page) -1}
        pageCount={Math.ceil(props.totalRecipes / props.perPage)}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={'pagination'}
        pageLinkClassName={'page-number'}
        previousLinkClassName={'page-number'}
        nextLinkClassName={'page-number'}
        activeLinkClassName={'active'}
      />
    </>
  );
};

export default RecipesPagination;