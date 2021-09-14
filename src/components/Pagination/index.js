import React from "react";
import PaginationButton from "./styled";

const Pagination = () => {
  return (
    <div className="buttons-container">
      <div className="group">
        <PaginationButton href="/" className="prev">
          Prev
        </PaginationButton>
        <div className="status">
          <span>1</span>
          de
          <span>2</span>
        </div>
        <PaginationButton href="/1" className="next">
          Next
        </PaginationButton>
      </div>
    </div>
  );
};

export default Pagination;
