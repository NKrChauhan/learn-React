import React, { useState } from "react";
import "./ApiSearch.css";
import axios from "axios";

function ApiSearch() {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://kitsu.io/api/edge//anime?filter[text]=cowboy%20bebop")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <button className="searchButton" type="submit">
          <i className="material-icons">search</i>
        </button>
      </div>
    </form>
  );
}

export default ApiSearch;
