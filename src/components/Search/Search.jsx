import React from "react";
import "./Search.css";

export const Search = ({ setSearchTerm, hideSearch }) => {
if (hideSearch) {
  return(<div className="search">
  <span className="material-icons searchColor">search</span>
  <input 
    placeholder="Search users"
    type="text"
    onChange={(event) => {
      setSearchTerm(event.target.value);
    }}
  ></input>
</div>)
} else {
  return null;
}

};
