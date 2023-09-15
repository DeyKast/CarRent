import axios from 'axios';

export const GetCarById = async id => {
  const url = `https://64fee767f8b9eeca9e294103.mockapi.io/api/adverts?id=${id}`;

  try {
    const response = await axios.get(url, {
      headers: { 'content-type': 'application/json' },
    });

    if (response.status === 200) {
      console.log(response.data);
      return response.data[0];
    } else {
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
