export const ToggleLike = id => {
  const currentIds = JSON.parse(localStorage.getItem('componentId')) || [];

  if (currentIds.includes(id)) {
    const updatedIds = currentIds.filter(existingId => existingId !== id);

    localStorage.setItem('componentId', JSON.stringify(updatedIds));
  } else {
    currentIds.push(id);

    localStorage.setItem('componentId', JSON.stringify(currentIds));
  }
};
