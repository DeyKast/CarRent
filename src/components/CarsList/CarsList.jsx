import { PropTypes } from 'prop-types';

import { GetCarById } from 'components/service/GetCarById';

import css from './carsList.module.css';

import iconHeart from '../../photos/heart-icon.svg';

const CarsList = ({ data }) => {
  const DEFAULT_IMG = 'https://openclipart.org/image/400px/321286';

  if (!data || data.length === 0) {
    return null;
  }

  const handleModalOpen = id => {
    GetCarById(id);
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
                  onClick={() => handleModalOpen(id)}
                >
                  Learn more
                </button>
                <img src={iconHeart} alt="heart" className={css.iconHeart} />
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

CarsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CarsList;
