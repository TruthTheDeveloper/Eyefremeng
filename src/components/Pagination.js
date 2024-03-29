import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className="py-2 px-4 rounded-md mx-2 bg-indigo-800 text-white my-6"
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
