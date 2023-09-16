import { useEffect, useState } from 'react';
import css from './favorite.module.css';

import CarsList from 'components/CarsList/CarsList';
import { GetLikedCarsData } from 'components/service/GetCarById';
import Loader from 'components/Loader/Loader';

const Favorite = () => {
  const [likedData, setLikedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleCarUnLiked = carId => {
    const updatedLikedData = likedData.filter(car => car.id !== carId);
    setLikedData(updatedLikedData);
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await GetLikedCarsData();
        setLikedData(data);
      } catch (error) {
        console.error('Error fetching liked cars:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isFirstRender]);

  return (
    <>
      <div className={css.favoriteContainer}>
        <p className={css.favoriteTitle}>FAVORITE</p>
        {likedData.length > 0 ? (
          <CarsList data={likedData} onCarUnLiked={handleCarUnLiked} />
        ) : (
          <p>No liked cars</p>
        )}
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default Favorite;
