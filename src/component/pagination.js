import React from 'react';
import './pagination.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <button
        className="prev-btn"
        onClick={() => {
          prevPage();
        }}
      >
        <ArrowBackIosIcon className="page-btn-back" />
      </button>

      <button
        className="prev-btn"
        onClick={() => {
          nextPage();
        }}
      >
        <ArrowForwardIosIcon className="page-btn-next" />
      </button>
    </div>
  );
};

export default Pagination;
