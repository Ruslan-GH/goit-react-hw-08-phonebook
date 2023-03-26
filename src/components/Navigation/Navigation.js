import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks';
import s from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/" className={s.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={s.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
