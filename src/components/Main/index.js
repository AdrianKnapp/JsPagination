import React from "react";

import "../../assets/styles/components/main.scss";

import Items from "../Items";
import Pagination from "../Pagination";

const index = () => {
  return (
    <div>
      <Items />
      <Pagination />
    </div>
  );
};

export default index;
