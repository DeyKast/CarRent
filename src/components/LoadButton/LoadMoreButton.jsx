import React from 'react';
import css from './loadMoreButton.module.css';

const LoadMoreButton = ({ handleButton }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={handleButton}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
