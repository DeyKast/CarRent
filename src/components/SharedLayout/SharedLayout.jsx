import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';

import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav className={css.navigationList}>
          <Link className={css.navigationListItem} to="/">
            Home
          </Link>
          <Link to="/catalog" className={css.navigationListItem}>
            Catalog
          </Link>
          <Link to="/favorite" className={css.navigationListItem}>
            Favorite
          </Link>
        </nav>
      </header>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
