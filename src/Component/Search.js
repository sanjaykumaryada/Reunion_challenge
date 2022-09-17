import React, { useState } from "react";
import "./Search.css";
const Search = ({ list, setSearchResult }) => {
  const [query, setQuery] = useState("");
  const search = () => {
    return list.filter(
      (li) =>
        li.name.toLowerCase().includes(query) ||
        li.location.toLowerCase().includes(query) ||
        li.type.toLowerCase().includes(query) ||
        li.price.toLowerCase().includes(query)
    );
  };

  const handleChange = (e) => {
    const searchItem = e.target.value;
    if (searchItem.length === 0) {
      setSearchResult(list);
    }
    setQuery(searchItem);
    setSearchResult(search);
  };
  return (
    <div className="search-bar">
      <input
        onChange={handleChange}
        className="input"
        type="text"
        placeholder="Search your item..."
      />
    </div>
  );
};
export default Search;
