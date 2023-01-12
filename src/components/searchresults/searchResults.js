import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSearchResults } from "../../api/UserApi";
import { SearchData } from "../../data/searchData";
import "./searchResults.css";

const SearchResults = () => {
  const { searchData } = useLocation().state;
  const [searchDataResults, setSearchDataresults] = useState({});

  useEffect(() => {
    const fetchSearchResults = async () => {
      const data = await getSearchResults(searchData);
      setSearchDataresults(data.data) ;
    };
    fetchSearchResults();
  },[searchData]);

  console.log(searchDataResults) ;

  return (
    <div className="searchResults">
      {searchDataResults && searchDataResults.map((result, id) => {
        return (
          <div className="result">
            <span>{`${result.firstname} ${result.lastname}`}</span>
            <span>@{result.username}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
