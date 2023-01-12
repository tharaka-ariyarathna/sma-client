import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSearchResults } from "../../api/UserApi";
import { SearchData } from "../../data/searchData";
import './searchResults.css' ;

const SearchResults = () => {
  const { searchData } = useLocation().state;
  const [searchDataResults, setSearchDataresults] = useState({}) ;

  useEffect(() => {
    const fetchSearchResults = async() => {
        console.log(searchDataResults)
        const data = await getSearchResults(searchData) ;
        console.log(data) ;
    }
    fetchSearchResults() ;
  })

  return (
    <div className="searchResults">
      {SearchData.map((result, id) => {
        return (
          <div className="result">
            <span>{result.name}</span>
            <span>@{result.username}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
