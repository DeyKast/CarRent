import { React, useEffect } from 'react';
import ReactDOM from 'react-dom';

import css from './modalWindow.module.css';
import closeIcon from '../../photos/close-icon.svg';
import DEFAULT_IMG from '../../photos/unknown-car.jpg';

const ModalWindow = ({ data, handleModalToggle }) => {
  const {
    id,
    make,
    model,
    year,
    type,
    rentalPrice,
    mileage,
    address,
    img,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
  } = data;

  const imgSrc = img ? img : DEFAULT_IMG;
  const addressParts = address.split(',');

  const sortedRentalConditions = rentalConditions
    .split('\n')
    .filter(sentence => sentence.trim() !== '');

  const rentalAgeText = sortedRentalConditions[0].slice(0, -2);
  const rentalAgeNum = sortedRentalConditions[0].slice(-2);

  const editedMileage = mileage => {
    const mileageStr = mileage.toString();

    const formattedMileage =
      mileageStr.slice(0, -3) + ',' + mileageStr.slice(-3);

    return formattedMileage;
  };

  useEffect(() => {
    const handleCloseEsc = evt => {
      if (evt.code === 'Escape') {
        handleModalToggle();
        return;
      }
    };
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, [handleModalToggle]);

  const handelBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      handleModalToggle();
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className={css.backdrop} onClick={handelBackdropClick}>
          <div className={css.modalWindow}>
            <div className={css.modalImgWrapper}>
              <img src={imgSrc} alt={model} className={css.modalImg} />
            </div>
            <div>
              <p className={css.modalTitle}>
                {make} <span className={css.modalTitleAccent}>{model}</span>,{' '}
                {year}
              </p>
              <p className={css.carText}>
                <span className={css.carSubtext}>{addressParts[1]}</span>
                <span className={css.carSubtext}>{addressParts[2]}</span>
                <span className={css.carSubtext}>id: {id}</span>
                <span className={css.carSubtext}>Year: {year}</span>
                <span className={css.carSubtext}>Type: {type}</span>
                <span className={css.carSubtext}>
                  fuelConsumption: {fuelConsumption}
                </span>
                <span className={css.carSubtext}>engineSize: {engineSize}</span>
              </p>
              <p className={css.carDescription}>{description}</p>
              <p className={css.carAccessories}>
                Accessories and functionalities:
              </p>
              <p className={css.secondCarText}>
                <span className={css.carSubtext}>{accessories[0]}</span>
                <span className={css.carSubtext}>{accessories[1]}</span>
                <span className={css.carSubtext}>{accessories[2]}</span>
                <span className={css.carSubtext}>{functionalities[0]}</span>
                <span className={css.carSubtext}>{functionalities[1]}</span>
                <span className={css.carSubtext}>{functionalities[2]}</span>
              </p>
            </div>
            <div className={css.carRentalConditionsWrapper}>
              <p className={css.carRentalConditions}>Rental Conditions: </p>
              <ul className={css.carRentalConditionsList}>
                <li className={css.carRentalConditionsListItem}>
                  <p>
                    {rentalAgeText}{' '}
                    <span className={css.accent}>{rentalAgeNum}</span>
                  </p>
                </li>
                <li className={css.carRentalConditionsListItem}>
                  <p>{sortedRentalConditions[1]}</p>
                </li>
                <li className={css.carRentalConditionsListItem}>
                  <p>{sortedRentalConditions[2]}</p>
                </li>
                <li className={css.carRentalConditionsListItem}>
                  <p>
                    Mileage:{' '}
                    <span className={css.accent}>{editedMileage(mileage)}</span>
                  </p>
                </li>
                <li className={css.carRentalConditionsListItem}>
                  <p>
                    Price: <span className={css.accent}>{rentalPrice}</span>
                  </p>
                </li>
              </ul>
            </div>
            <a href="tel:+380730000000" className={css.carRentBtn}>
              Rental car
            </a>
            <button onClick={handleModalToggle} className={css.closeModalBtn}>
              <img src={closeIcon} alt="close-icon" />
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ModalWindow;
