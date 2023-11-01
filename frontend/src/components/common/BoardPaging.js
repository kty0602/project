import React, { useState } from "react";
import './Paging.css';
import Pagination from "react-js-pagination";

const BoardPaging = ({ handleChangePage, boards }) => {

  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    console.log(page);
    setPage(page);
    handleChangePage({ page : page });
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={20}
      totalItemsCount={ boards ? boards.data.totalPage * 20 : 0 }
      pageRangeDisplayed={10}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default BoardPaging;