import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={s.wrapper}>
      <p className={s.username}>🤗 WELCOME, {user.name}</p>
      <Button
        type="button"
        variant="contained"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </Button>
    </div>
  );
};
