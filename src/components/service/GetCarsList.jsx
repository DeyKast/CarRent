import axios from 'axios';

let fullCarsList = [];

export const GetCarsList = async (page, setShowMoreButton) => {
  const url = 'https://64fee767f8b9eeca9e294103.mockapi.io/api/adverts';

  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      fullCarsList = response.data;
      const startIndex = (page - 1) * 8;
      const endIndex = startIndex + 8;
      const carsData = fullCarsList.slice(startIndex, endIndex);

      console.log(carsData);

      if (page >= Math.ceil(fullCarsList.length / 8)) {
        console.log('Sorry, there are no more cars.');
        setShowMoreButton(false);
      }

      return {
        carsData,
      };
    } else {
      throw new Error('Помилка запиту');
    }
  } catch (error) {
    console.error('Помилка:', error);
    throw error;
  }
};
