import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardActions } from '@mui/material';

const Product = ({ product }) => {
    const { _id, name, weight, price, image } = product;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, p: 4 }}>
                <CardMedia
                    component="img"
                    style={{ width: '100%', height: '300px', margin: '0 auto' }}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="p" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {weight}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {price}
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                    <Link to={`/productdetail/${_id}`}>
                        <button style={{ backgroundColor: "green", color: "white", padding: "10px 70px" }}>Buy Now</button>
                    </Link>
                </CardActions>


            </Card>
        </Grid >
    );
};

export default Product;