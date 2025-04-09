import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) onSearch(input.trim());
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKey}
        className="p-2 border rounded w-64"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
