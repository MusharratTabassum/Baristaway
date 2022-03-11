import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardActions } from '@mui/material';
import image from "../../../images/qoute.png"



const Review = ({ review }) => {
    const { _id, user_name, rating, reviews } = review;
    return (
        <div>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 1, p: 4 }}>
                    <CardMedia
                        component="img"
                        style={{ width: '30%', margin: '0 auto' }}
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="p" component="div">
                            {user_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {reviews}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {rating}/5.0
                        </Typography>
                    </CardContent>



                </Card>
            </Grid >

        </div>
    );
};

export default Review;