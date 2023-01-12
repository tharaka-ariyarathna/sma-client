import React from "react";
import { useLocation } from "react-router-dom";
import { SearchData } from "../../data/searchData";

const SearchResults = () => {
  const { searchData } = useLocation().state;
  console.log(searchData);
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

export default SearchResults;
