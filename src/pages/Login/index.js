import React, { useState } from 'react'
import { Container, Typography, TextField, Button, Slide } from '@mui/material';
import classes from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';


const Login = () => {

    const [userCred, setUserCred] = useState('');
    const [password, setPassword] = useState('');
    const [showForm, setShowForm] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        
        const authData = { value: userCred, password };
        dispatch(login(authData,navigate));


    };

    return (
        <Slide direction="up" in={showForm} mountOnEnter unmountOnExit>
            <div className={classes.formContainer}>
                <Container component="main" maxWidth='xs' className={classes.cont}>
                    <form className={classes.form} onSubmit={handleLogin}>
                        <Typography textAlign={'center'} mb={2} component="h1" variant="h5">
                            Login
                        </Typography>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            inputProps={{
                                style: {
                                    paddingTop: 10,
                                    paddingBottom: 10
                                }
                            }
                            }
                            sx={{ mb: 3 }}
                            id="username"
                            label="Username or Email"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={userCred}
                            onChange={(e) => setUserCred(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"

                            sx={{ mb: 3 }}
                            inputProps={{
                                style: {
                                    paddingTop: 10,
                                    paddingBottom: 10
                                }
                            }
                            }
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                        >
                            Login
                        </Button>
                    </form>
                    <Typography color={'gray'} marginTop={3} textAlign={'center'} fontSize={15}>Don't have an account? <Link style={{ textDecoration: 'none', color: '#0085c2' }} to='/signup'>Sign Up</Link></Typography>
                </Container>
            </div>
        </Slide>
    );
};

export default Login;