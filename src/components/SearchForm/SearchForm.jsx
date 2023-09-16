import css from './searchForm.module.css';

export const SearchForm = () => {
  const selectedValue = event => {
    event.preventDefault();
    console.log(event.value);
  };

  return (
    <div className={css.formContainer}>
      <form className={css.formWrapper}>
        <label className={css.formLabel}>
          Car brand
          <select name="brand" className={css.fromSelector}>
            <option value="">Choose brand</option>
            <option value="Buick">Buick</option>
          </select>
        </label>
        <label className={css.formLabel}>
          Price/ 1 hour
          <select name="brand" className={css.fromSelector}>
            <option value="">To $</option>
            <option value="30">30</option>
          </select>
        </label>
        <label className={css.formLabel}>
          Сar mileage / km
          <div className={css.fromMilageWrapper}>
            <input
              type="number"
              placeholder="From"
              name="milage-from"
              id="milage-from"
              className={css.milageInputLeft}
            />
            <input
              type="number"
              placeholder="To"
              name="milage-to"
              id="milage-to"
              className={css.milageInputRight}
            />
          </div>
        </label>
        <button type="submit" onClick={selectedValue} className={css.btn}>
          Search
        </button>
      </form>
    </div>
  );
};
