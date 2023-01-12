import React from "react";
import { SearchData } from "../../data/searchData";

const searchResult = () => {
  return (
    <>
      {SearchData.map((result, id) => {
        return (
          <div>
            {result.name}
            {result.username}
          </div>
        );
      })}
    </>
  );
};

export default searchResult;
