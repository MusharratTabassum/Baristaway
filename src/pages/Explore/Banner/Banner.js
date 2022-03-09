import React from 'react';
import Box from '@mui/material/Box';
import img from "../../../images/expban.avif"
import Typography from '@mui/material/Typography';

const Banner = () => {
    return (
        <Box>
            <Box style={{ background: `radial-gradient(transparent, black), url('${img}`, backgroundSize: 'cover', height: "500px", backgroundBlendMode: 'saturation', backgroundRepeat: "no-repeat", maxWidth: "100%" }}>
                <Box style={{ background: "rgba(0, 0, 0, 0.3)", height: "100%", color: "white" }} >
                    <Box><Typography variant="h4" component="div" sx={{ paddingTop: "15%" }}>Home | Products</Typography> </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;