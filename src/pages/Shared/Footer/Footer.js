import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../images/Objects.png"

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "black", marginTop: "5%" }}>
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3} sx={{
                        alignItems: 'center',
                        textAlign: 'left',
                        padding: "0"
                    }}>
                        <Box>
                            <ul style={{ display: "flex", fontSize: "1.42rem" }}  >
                                <img src={img} alt="" style={{ background: "black" }} /> <h4 style={{ marginLeft: "30px", fontWeight: '600', color: "#f5c035" }}>Baristaway</h4>
                            </ul>
                            <p style={{ color: "#acacb1", fontWeight: 400, lineHeight: "1.5", fontFamily: "Montserrat,sans-serif", fontSize: "1.42rem" }}> We are passionate about providing a unique dining experience that will leave you feeling like we have put the extra sprinkles on your visit! Our team is full of enthusiasm for you to fully indulge in our delicious menu and will be happy to serve you.
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{

                        alignItems: 'center',
                        textAlign: 'left',
                        padding: "0"
                    }}>
                        <Box style={{ color: "#acacb1", fontWeight: 400, lineHeight: "1.5", fontFamily: "Montserrat,sans-serif", fontSize: "1.42rem" }}>
                            <ul><h4 style={{ fontWeight: '600', color: "#f5c035" }}>INFORMATION</h4></ul>
                            <ul>Help & Contact US</ul>
                            <ul>Return & Refunds</ul>
                            <ul>Online Store</ul>
                            <ul>Terms & Condition</ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{

                        alignItems: 'center',
                        textAlign: 'left',
                        padding: "0"
                    }}>
                        <Box style={{ color: "#acacb1", fontWeight: 400, lineHeight: "1.5", fontFamily: "Montserrat,sans-serif", fontSize: "1.42rem" }}>
                            <ul> <h4 style={{ fontWeight: '600', color: "#f5c035" }}>ABOUT</h4></ul>
                            <ul><Link style={{ textDecoration: 'none', color: '#acacb1' }} to="/">Baristaway</Link></ul>
                            <ul><Link style={{ textDecoration: 'none', color: '#acacb1' }} to="/explore">products</Link></ul>
                            <ul><Link style={{ textDecoration: 'none', color: '#acacb1' }} >Testimonials</Link></ul>
                            <ul><Link style={{ textDecoration: 'none', color: '#acacb1' }} to='/contact'>Contact us</Link></ul>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3} sx={{

                        alignItems: 'center',
                        textAlign: 'left',
                        padding: "0"
                    }}>
                        <Box style={{ color: "#acacb1", fontWeight: 400, lineHeight: "1.5", fontFamily: "Montserrat,sans-serif", fontSize: "1.42rem" }}>
                            <Box>
                                <h4 style={{ fontWeight: '600', color: "#f5c035" }}>STAY CONNECTED</h4>
                                <p className='mt-3'>The Company Name Inc. 9870 St Vincent Place, Glasgow, DC 45</p>
                                <input style={{ padding: "10px" }} type="email" placeholder='Your Email Address' />
                            </Box>

                            <button style={{ padding: "10px 30px", marginTop: "7%", marginBottom: "30%", backgroundColor: '#d10d0d', color: "white", fontSize: "1.1rem" }}>Subscribe</button>


                        </Box>
                    </Grid>


                </Grid>
                <small style={{ color: "#f5c035", marginTop: "30%" }}>Developed by Musharrat | All rights reserved</small>
            </Container>


        </Box>
    );
};

export default Footer;