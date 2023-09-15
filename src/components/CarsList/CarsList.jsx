import { PropTypes } from 'prop-types';
import { useState } from 'react';

import { GetCarById } from 'components/service/GetCarById';
import Loader from 'components/Loader/Loader';

import css from './carsList.module.css';
import ModalWindow from 'components/ModalWindow/ModalWindow';

import iconHeart from '../../photos/heart-icon.svg';

const CarsList = ({ data }) => {
  const DEFAULT_IMG = 'https://openclipart.org/image/800px/321286';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!data || data.length === 0) {
    return null;
  }

  const handleModalToggle = async id => {
    setIsLoading(true);

    if (!isModalOpen) {
      try {
        const response = await GetCarById(id);
        if (response) {
          setModalData(response);
        } else {
          console.error('ERROR ! resp => ', response);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    setIsModalOpen(!isModalOpen);
    setIsLoading(false);
  };

  return (
    <div className={css.carsListContainer}>
      <ul className={css.carsList}>
        {data.map(
          ({
            id,
            make,
            model,
            year,
            type,
            rentalPrice,
            rentalCompany,
            address,
            img,
            accessories,
          }) => {
            const imgSrc = img ? img : DEFAULT_IMG;
            const addressParts = address.split(',');

            return (
              <li key={id} className={css.carsListItem}>
                <div className={css.imgWrapper}>
                  <img
                    src={imgSrc}
                    alt={model}
                    className={css.carsListItemImg}
                  />
                </div>
                <div className={css.carTitleWrapper}>
                  <p>
                    {make} <span className={css.carModel}>{model},</span>
                    {year}
                  </p>
                  <p>{rentalPrice}</p>
                </div>
                <div className={css.carTextWrapper}>
                  <p className={css.carText}>
                    <span className={css.carSubtext}>{addressParts[1]}</span>
                    <span className={css.carSubtext}>{addressParts[2]}</span>
                    <span className={css.carSubtext}>{rentalCompany}</span>
                    <span className={css.carSubtext}>{id}</span>
                    <span className={css.carSubtext}>{type}</span>
                    <span className={css.carSubtext}>{accessories[0]}</span>
                  </p>
                </div>

                <button
                  className={css.carsListItemBtn}
                  onClick={() => handleModalToggle(id)}
                >
                  Learn more
                </button>
                <img src={iconHeart} alt="heart" className={css.iconHeart} />
              </li>
            );
          }
        )}
      </ul>
      {isModalOpen && (
        <ModalWindow data={modalData} handleModalToggle={handleModalToggle} />
      )}
      {isLoading && <Loader />}
    </div>
  );
};

CarsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CarsList;
