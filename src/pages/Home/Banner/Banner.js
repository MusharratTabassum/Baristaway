import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from "../../../images/banner.jpg"

const Banner = () => {
    const bannerBg = {
        backgroundImage: `url(${bgImg})`,
        width: "100%",
        height: "625px",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

    }
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ paddingLeft: "3%" }}>
                <Grid item style={{ textAlign: 'left', color: "white" }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" style={{ paddingTop: "20%" }} >
                            It All Began With <br /> a Special coffee Beans

                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 20, fontWeight: 300, color: 'white' }}>
                            We are a coffee roasting company with a big heart for the farmers <br /> in Africa who grow our wonderful 100% Arabic coffee.
                        </Typography>
                        <Link to="/explore" style={{ textDecoration: "none" }}>
                            <Button variant="contained" style={{ backgroundColor: '#d10d0d', padding: "22px 60px", marginTop: "3%", fontSize: "1.2rem" }} >Go to Shop</Button></Link>

                    </Box>
                </Grid>

            </Grid>
        </Box >
    );
};

export default Banner;