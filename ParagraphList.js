import React, { useState } from "react";

const ParagraphList = ({ items, perPage }) => {
  const [visibleCount, setVisibleCount] = useState(perPage);

  const showMore = () => {
    setVisibleCount((prev) => prev + perPage);
  };

  const isAllVisible = visibleCount >= items.length;

  return (
    <div className="space-y-4">
      {items.slice(0, visibleCount).map((item, index) => (
        <p key={index} className="text-base">
          {item}
        </p>
      ))}

      {!isAllVisible && (
        <button
          onClick={showMore}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Показать ещё
        </button>
      )}
    </div>
  );
};

export default ParagraphList;