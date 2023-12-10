import { Alert, Button, Container } from '@mui/material';
import React from 'react';
import classes from './index.module.css';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    const clickhandler = () => {
        navigate('/',{replace: true});
    }
    return (
        <Container maxWidth={'sm'} className={classes.errorCont}>
            <Alert severity='error'>Something went wrong on server</Alert>
            <Button className={classes.btn} type='button' variant='contained' onClick={clickhandler}>Back to Home Page</Button>
        </Container>
    )
}

export default Error;