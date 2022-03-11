import { Box, Container, Grid } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const inputBox = {
        borderRadius: " 6px",
        padding: "12px",
        margin: "5px 3px",
        width: "40%",
        border: "1px solid #999",
        outline: "none",
        backgroundColor: "#fff"
    }


    const onAddSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thank you for reviewing us!');
                    reset();
                }
            })
    }
    return (
        <Container>
            <Box style={{ marginTop: "6%" }}>
                <h2>Give us your valuable review on products</h2>

                <form onSubmit={handleSubmit(onAddSubmit)} style={{ marginTop: "3%" }}>
                    <input style={inputBox} {...register("user_name", { required: true, maxLength: 200 })} placeholder="your name" className='inputField' defaultValue={user.displayName} />
                    <br />
                    <input style={inputBox} {...register("reviews", { required: true, maxLength: 200 })} placeholder="your review" className='inputField' />
                    <br />
                    <input style={inputBox} type="number" {...register("rating")} placeholder="give ratings out of 5.00" className='inputField' />
                    <br />

                    <input style={{ backgroundColor: "green", color: "white", padding: "13px", width: "42%", marginTop: "10px", borderRadius: "8px" }} className='add-btn' type="submit" />
                </form>
            </Box>
        </Container>



    );
};

export default AddReview;