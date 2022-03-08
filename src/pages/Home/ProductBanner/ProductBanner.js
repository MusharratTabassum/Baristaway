import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import imgcoffee from "../../../images/coffe-mug.jpg"
import { Link } from 'react-router-dom';


const ProductBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ marginTop: "100px" }} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img img-fluid
                        style={{ maxWidth: "100%" }}
                        src={imgcoffee} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{

                    alignItems: 'center',
                    textAlign: 'left',
                    padding: "0"
                }}>
                    <Box sx={{ padding: "40px" }}>
                        <Typography variant="h6" sx={{ mb: 2 }} style={{ color: ' #f5c035', fontWeight: "600", fontSize: "1.5rem", lineWeight: "1.6rem" }}>
                            SPECIAL OF THE DAY
                        </Typography>
                        <Typography variant="h4" style={{ color: '131310', textTransform: "uppercase", font: "800 3.42857rem/4.21429rem Montserrat,sans-serif", letterSpacing: "-.02em", fontSize: "3.42857rem" }}>
                            COFFEE SOLUTIONS <br /> FOR PROFESSIONAL
                        </Typography>
                        <Typography variant="h6" sx={{ font: "400 1.57143rem/2.57143rem Montserrat,sans-serif", color: '#acacb1', fontSize: " 1.71429rem", marginTop: "30px" }}>
                            Every business has a different approach to coffee. From an automatic coffee machine at the office to a hand poured cappuccino in your favorite local brunch place.
                        </Typography>
                        <Link to="/explore" style={{ textDecoration: "none" }}>
                            <Button variant="contained" style={{ backgroundColor: '#d10d0d', padding: "22px 60px", marginTop: "7%", fontSize: "1.2rem" }}>DISCOVER MORE</Button>
                        </Link>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductBanner;