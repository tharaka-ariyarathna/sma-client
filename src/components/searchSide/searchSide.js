import React from "react";
import "./searchSide.css";
import LogoSearch from "../logo search/LogoSearch";
import SearchResult from "../searchresults/searchResults";
import { useLocation } from "react-router-dom";

const SearchSide = () => {
  const { location } = useLocation().state;
  return (
    <div className="searchSide">
      <LogoSearch />
      <SearchResult />
    </div>
  );
};

export default SearchSide;
