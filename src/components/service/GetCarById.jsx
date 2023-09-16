import axios from 'axios';
import { GetLikedList } from './GetLikedCars';

export const GetCarById = async id => {
  const url = `https://64fee767f8b9eeca9e294103.mockapi.io/api/adverts?id=${id}`;

  try {
    const response = await axios.get(url, {
      headers: { 'content-type': 'application/json' },
    });

    if (response.status === 200) {
      return response.data[0];
    } else {
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const GetLikedCarsData = async () => {
  const likedListIds = GetLikedList();

  try {
    const likedList = await Promise.all(
      likedListIds.map(async id => {
        const carData = await GetCarById(id);
        return carData;
      })
    );

    console.log(likedList);
    return likedList;
  } catch (error) {
    console.error('Error fetching liked cars:', error);
    throw error;
  }
};
