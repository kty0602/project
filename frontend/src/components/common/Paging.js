import React, { useState } from "react";
import './Paging.css';
import Pagination from "react-js-pagination";

const Paging = ({ handleChangePage, cardata }) => {

  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    handleChangePage({ page : page });
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={40}
      totalItemsCount={cardata ? cardata.totalPage * 40 : 0}
      pageRangeDisplayed={10}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;