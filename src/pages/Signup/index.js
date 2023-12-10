import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Slide } from '@mui/material';
import classes from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/auth';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [showForm, setShowForm] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (!username || !email || !password || !confirmPass) {
            dispatch({ type: 'SET_MESSAGE', message: 'One or more empty inputs!' });
            return;
        }
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(validRegex)) {
            dispatch({ type: 'SET_MESSAGE', message: 'Invalid email' });
            return;
        }
        if (password.length < 8) {
            dispatch({ type: 'SET_MESSAGE', message: 'Password should be atleast 8 characters long' });
            return;
        }
        if (password !== confirmPass) {
            dispatch({ type: 'SET_MESSAGE', message: 'Passwords do not match' });
            return;
        }
        dispatch(signup({ username, email, password }, navigate))


    };

    return (
        <Slide direction="up" in={showForm} mountOnEnter unmountOnExit>
            <div className={classes.formContainer}>
                <Container component="main" maxWidth='xs' className={classes.cont}>
                    <form className={classes.form} onSubmit={handleSignup}>
                        <Typography textAlign={'center'} mb={2} component="h1" variant="h5">
                            Create an account
                        </Typography>
                        <TextField
                            variant="outlined"

                            fullWidth
                            inputProps={{
                                style: {
                                    paddingTop: 10,
                                    paddingBottom: 10
                                }
                            }
                            }
                            sx={{ mb: 3 }}
             
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            variant="outlined"

                            fullWidth
                            inputProps={{
                                style: {
                                    paddingTop: 10,
                                    paddingBottom: 10
                                }
                            }
                            }
                            sx={{ mb: 3 }}
                        
                            label="Email"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            variant="outlined"

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
                        <TextField
                            variant="outlined"

                            fullWidth
                            name="password"
                            label="Confirm Password"
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
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                        >
                            Sign Up
                        </Button>
                    </form>
                    <Typography color={'gray'} marginTop={3} textAlign={'center'} fontSize={15}>Already have an account? <Link style={{ textDecoration: 'none', color: '#0085c2' }} to='/login'>Login</Link></Typography>
                </Container>
            </div>
        </Slide>
    )
};

export default Signup;