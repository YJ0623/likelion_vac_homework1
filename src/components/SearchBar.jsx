import React, { useState } from "react";
import SearchIcon from "../assets/SearchIcon.svg";


const SearchBar = ({ value, onChange, onSearch }) => {
  const handleSearch = () => {
    if (value.trim()) onSearch(value);
  }

  return (
    <div className="flex items-center w-full max-w-2xl">
      <input
        type="text"
        placeholder="상품명을 검색하세요"
        value={value}
        onChange={onChange}
        onKeyDown={e => {
          if (e.key === "Enter") handleSearch();
        }}
        className="border border-gray-300 rounded-l px-3 py-1 w-full focus:outline-none focus:border-[#4F46E5]"
      />
      <button
        onClick={handleSearch}
        className="bg-[#4F46E5] px-3 py-1 rounded-r flex items-center justify-center hover:bg-blue-600 cursor-pointer"
        style={{ height: "36px" }}
      >
        <img src={SearchIcon} alt="검색아이콘" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchBar;

