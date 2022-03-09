import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from "../../../images/login.avif"

const Login = () => {

    const { signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} style={{ marginTop: "3%", border: "3px solid black", paddingBottom: "0" }}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', maxHeight: "100%", paddingBottom: "2%" }} src={login} alt="" />
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h6" gutterBottom style={{ color: '131310', textTransform: "uppercase", font: "800 2.42857rem/2.21429rem Montserrat,sans-serif", letterSpacing: "-.02em", fontSize: "1.42857rem", marginBottom: "7%" }}>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', mt: 4, mb: 4 }} type="submit" variant="contained" style={{ backgroundColor: "green" }}>Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/registration">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>

                    </form>
                    <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained" style={{ backgroundColor: "green" }}>Google Sign In</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;