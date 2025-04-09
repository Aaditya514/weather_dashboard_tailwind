import React from 'react';

const RecentSearches = ({ history, onSelect }) => {
  if (history.length === 0) return null;
  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Recent Searches</h3>
      <div className="flex justify-center gap-2 flex-wrap">
        {history.map((city, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(city)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
