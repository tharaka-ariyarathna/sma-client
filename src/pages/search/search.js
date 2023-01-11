import React from "react";
import PostSide from "../../components/postside/PostSide";
import RightSide from "../../components/rightSide/RightSide";
import SearchSide from "../../components/searchSide/searchSide";
import Profileside from "../../components/profileside/Profileside";
import "./search.css";

const search = () => {
  return (
    <div className="search">
      <Profileside location={"homePage"} />
      <PostSide location={"homePage"} />
      <RightSide />
    </div>
  );
};

export default search;

/*(<SearchSide />
      <PostSide location={"homePage"} />
      <RightSide />)*/
