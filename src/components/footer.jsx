import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
const Footer = () => (
  <footer className='footer'>
    <Typography style={{ position: "absolute",
width: "306px",
height: "31px",
left: "696px",
top: "20px",
fontFamily: 'Rajdhani',
fontStyle: "normal",
fontWeight: 500,
fontSize: "24px",
lineHeight: "31px",
/* identical to box height */
letterSpacing: "0.06em",
color: "#000000" }}>
        Made by Technovation with  &nbsp; <FavoriteBorderIcon sx={{ position: "absolute",
left: "58.45%",
right: "40.39%",
top: "97.47%",
bottom: "1.64%",
}}/>
        </Typography>
  </footer>
);
  
export default Footer;