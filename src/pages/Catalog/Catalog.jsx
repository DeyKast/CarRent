import React, { useEffect, useState } from 'react';

import { SearchForm } from 'components/SearchForm/SearchForm';
import CarsList from 'components/CarsList/CarsList';

import { GetCarsList } from 'components/service/GetCarsList';
import Loader from 'components/Loader/Loader';
import LoadMoreButton from 'components/LoadButton/LoadMoreButton';

import css from './Catalog.module.css';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [carsData, setCarsData] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleButton = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    setIsLoading(true);
    console.log(page);
    GetCarsList(page, setShowMoreButton)
      .then(({ carsData }) => {
        setCarsData(prevCarsData => [...prevCarsData, ...carsData]);
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, isFirstRender]);

  return (
    <>
      <div>
        <SearchForm />
      </div>
      <div>
        <CarsList data={carsData} />
        {showMoreButton && (
          <div className={css.loadMoreBtnWrapper}>
            <LoadMoreButton
              CarsList={css.loadMoreBtn}
              handleButton={handleButton}
            />
          </div>
        )}
      </div>

      {isLoading && <Loader />}
    </>
  );
};

export default Catalog;
