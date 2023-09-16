export const ToggleLike = id => {
  // Отримуємо поточний масив ID з LocalStorage
  const currentIds = JSON.parse(localStorage.getItem('componentId')) || [];

  if (currentIds.includes(id)) {
    // Якщо ID вже присутній в масиві, видаляємо його
    const updatedIds = currentIds.filter(existingId => existingId !== id);
    // Зберігаємо оновлений масив у LocalStorage
    localStorage.setItem('componentId', JSON.stringify(updatedIds));
  } else {
    // Якщо ID не присутній в масиві, то додаємо його
    currentIds.push(id);
    // Зберігаємо оновлений масив у LocalStorage
    localStorage.setItem('componentId', JSON.stringify(currentIds));
  }
};
