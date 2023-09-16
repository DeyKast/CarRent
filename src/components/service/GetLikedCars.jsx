export const GetLikedList = () => {
  const currentIds = JSON.parse(localStorage.getItem('componentId')) || [];
  return currentIds;
};
