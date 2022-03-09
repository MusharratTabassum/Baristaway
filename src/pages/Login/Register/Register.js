import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from "../../../images/login.avif"

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError, signInWithGoogle, loginUser } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2} style={{ marginTop: "3%", border: "3px solid black", paddingBottom: "0" }}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', maxHeight: "100%", paddingBottom: "2%" }} src={login} alt="" />
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h6" gutterBottom style={{ color: '131310', textTransform: "uppercase", font: "800 2.42857rem/2.21429rem Montserrat,sans-serif", letterSpacing: "-.02em", fontSize: "1.42857rem", marginBottom: "7%" }}>Register here</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Retype Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', mt: 4, mb: 4 }} type="submit" variant="contained" style={{ backgroundColor: "green" }}>Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already an User? Please login</Button>
                        </NavLink>

                    </form>
                    }
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained" style={{ backgroundColor: "green" }}>Google Sign In</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;