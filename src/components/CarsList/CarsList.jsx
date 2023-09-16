import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';

import { GetCarById } from 'components/service/GetCarById';
import { ToggleLike } from 'components/service/ToggleLike';
import { GetLikedList } from 'components/service/GetLikedCars';
import Loader from 'components/Loader/Loader';

import css from './carsList.module.css';
import ModalWindow from 'components/ModalWindow/ModalWindow';

import iconHeart from '../../photos/heart-icon.svg';
import likedIcon from '../../photos/liked-icon.svg';
import DEFAULT_IMG from '../../photos/unknown-car.jpg';

const CarsList = ({ data, onCarUnLiked }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [likedList, setLikedList] = useState([]);

  useEffect(() => {
    const savedLikedList = GetLikedList();
    setLikedList(savedLikedList);
  }, []);

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

  const setLike = id => {
    if (onCarUnLiked) {
      onCarUnLiked(id);
    }

    ToggleLike(id);
    const updatedLikedList = GetLikedList();
    setLikedList(updatedLikedList);

    console.log(updatedLikedList);
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

            const isLiked = likedList.includes(id);

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
                <img
                  src={isLiked ? likedIcon : iconHeart}
                  alt="heart"
                  className={css.iconHeart}
                  onClick={() => setLike(id)}
                />
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
