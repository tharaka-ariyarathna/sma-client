import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SearchData } from "../../data/searchData";
import './searchResults.css' ;

const SearchResults = () => {
  const { searchData } = useLocation().state;

  useEffect(() => {
    const name = searchData.split(" ") ;
    const firstname = name[0] ;
    const lastname = name[1] ;
    console.log(firstname) ;
    console.log(lastname) ;
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
