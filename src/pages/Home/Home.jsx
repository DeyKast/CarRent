import css from './home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <main className={css.homeContainer}>
        <h1 className={css.homeTitle}>CarRent Company</h1>
        <p className={css.homeText}>
          The reputable company CarRent offers car rental services for your
          comfortable travel. Our range includes various car models to meet
          different needs and budgets. We take pride in providing reliable cars
          and personalized solutions for each customer. Join us today and make
          your journey unforgettable!
        </p>
        <Link to="/catalog" className={css.homeBtn}>
          -Catalog-
        </Link>
      </main>
    </>
  );
};

export default Home;
