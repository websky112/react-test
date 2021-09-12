import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, gotoPage, pageIndex }) => {
  const handleGotoPage = ({ selected }) => {
    gotoPage(selected);
  };

  return (
    <ReactPaginate
      previousLabel="Prev"
      nextLabel="Next"
      pageCount={pageCount}
      onPageChange={handleGotoPage}
      containerClassName={"pagination"}
      previousLinkClassName={"pagination__link"}
      nextLinkClassName={"pagination__link"}
      disabledClassName={"pagination__link--disabled"}
      activeClassName={"pagination__link--active"}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      forcePage={pageIndex}
    />
  );
};

export default Pagination;
