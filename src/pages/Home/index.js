import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import classes from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../actions/currentUser';

const Home = () => {
  var user = useSelector(state => state.currentUserReducer);
  const dispatch = useDispatch();


  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    dispatch(currentUser(null));
    dispatch({type: 'SET_MESSAGE', message: 'Successfully Logged Out'});
  }
  const loginHandler = () => {
    navigate('/login');
  }
  return (
    <Container maxWidth={'lg'} className={classes.home}>
      <div>

        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
      </div>
      {user === null &&
        <div className={classes.inner}>

          <Typography color={'whitesmoke'} fontSize={24} marginBottom={3}>Feel Free to explore login-logout functionality</Typography>
          <Button type="button"

            variant="contained"
            color="secondary" onClick={loginHandler}>Login</Button>
        </div>
      }
      {user !== null &&
        <div className={classes.inner}>
          <Typography color={'whitesmoke'} fontSize={24} marginBottom={3}>Welcome {user?.result.user}</Typography>
          <Button type="button"

            variant="contained"
            color="secondary" onClick={logoutHandler}>Logout</Button>
        </div>
      }


    </Container>
  )
};

export default Home;