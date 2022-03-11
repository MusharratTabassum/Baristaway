import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from "../../../Hooks/useAuth"
import { Typography, Box, Grid } from '@mui/material';

const ProductDetailing = () => {
    const { productId } = useParams();
    const [productInformation, setProductInformation] = useState([]);

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const inputBox = {
        borderRadius: " 6px",
        padding: "12px",
        margin: "5px 3px",
        width: "40%",
        border: "1px solid #999",
        outline: "none",
        backgroundColor: "#fff"
    }

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProductInformation(data));
    }, []);

    const chosenProduct = productInformation.find(item => item._id === productId);

    const onSubmit = data => {
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks!The product is booked.We will contact with you shortly.');
                    console.log(res);
                    reset();

                }
            })
    }
    return (
        <Box sx={{ flexGrow: 1 }} style={{ marginTop: "50px" }} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img img-fluid

                        style={{ width: '70%', margin: '0 auto', padding: "40px", justifyContent: "start" }}
                        src={chosenProduct?.image} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    alignItems: 'center',
                    textAlign: 'left',
                    padding: "0"
                }}>
                    <Box sx={{ padding: "40px" }}>
                        <Typography variant="h6" sx={{ mb: 2 }} style={{ color: ' green', fontWeight: "600", fontSize: "1.5rem", lineWeight: "1.6rem" }}>
                            {chosenProduct?.name}
                        </Typography>
                        <Typography variant="p" sx={{ font: "100 ", color: 'black', fontSize: " 1.1rem", marginTop: "30px" }}>{chosenProduct?.des}</Typography>
                        <Typography variant="h6" sx={{ font: "100 ", color: 'black', fontSize: " 1.1rem", marginTop: "20px" }}>Weight : {chosenProduct?.weight}</Typography>
                        <Typography variant="h6" sx={{ font: "100 ", color: 'black', fontSize: " 1.1rem", marginTop: "1px" }}>Price : {chosenProduct?.price}tk only</Typography>
                        <Typography variant="h6" sx={{ font: "600 ", color: 'green', fontSize: " 1.1rem", marginTop: "1px" }}>{chosenProduct?.storage}</Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input style={inputBox} type="text" {...register("user_name", { required: true, maxLength: 20 })} placeholder="User Name" defaultValue={user.displayName} />

                            <input style={inputBox} type="email" {...register("email", { required: true })} placeholder="Email" defaultValue={user.email} />

                            <input style={inputBox} type="text" {...register("status", { required: true })} defaultValue="pending" />
                            <input style={inputBox} type="text" {...register("totat_packet", { required: true })} placeholder="No. of packets" />

                            <input style={inputBox} type="number" {...register("phone", { required: true })} placeholder="your phone number" />


                            <input style={inputBox} type="text" {...register("address", { required: true })} placeholder="Address" />
                            <br></br>
                            <input style={{ backgroundColor: "green", color: "white", padding: "13px", width: "90%", marginTop: "10px", borderRadius: "8px" }} type="submit" value="Order" />

                        </form>

                    </Box>
                </Grid>
            </Grid>
        </Box>




    );
};

export default ProductDetailing;