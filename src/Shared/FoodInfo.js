import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { Button, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import AddToCartModal from './AddToCartModal';

export default function FoodInfo({ food }) {
  const useStyle = makeStyles({
    addToCartButton:{
      background: "transparent !important",
      border : '2px solid #fe6b8b !important',
      color: "#fe6b8b !important",
      fontWeight : 'bold !important',
      fontSize : '1.1rem !important',
      padding: '12px 22px !important',
      display: "flex",
      "&:hover": {
        background: "#fe6b8b !important",
        color: "white !important",
      },
    }
  })
  const { addToCartButton } = useStyle();
  
  
  // Handle Popup____
  const [popupOpen, setPopupOpen] = React.useState(false);
  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);
    
  return (
    <Box>
      <Typography
        variant="h4"
        color="#fe6b8b"
        fontWeight="600"
        sx={{ mt: "20px", display: "flex", alignItems: "center" }}
      >
        <FoodBankIcon sx={{ fontSize: "40px", mt: "-7px" }} />
        {food.title}
      </Typography>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px'}}>
        <Typography variant="h4" fontWeight="600">${food?.price}</Typography>
        <Rating name="half-rating-read" size="large" value={Number(food.rating)} precision={0.5} readOnly />
      </Box>
      <Typography
        variant="h6"
        color="#333"
        sx={{ py: "8px", fontSize: "17px", textAlign: "justify" }}
      >
        {food.description}
      </Typography>
      <Typography
        variant="h6"
        color="#333"
        sx={{ py: "8px", fontSize: "17px", mt: "10px", textAlign: "justify" }}
      >
        {food.description2}
      </Typography>
      {/* ___________Add To Cart Modal Here__________ */}
      <Button onClick={handlePopupOpen} className={addToCartButton}><AddShoppingCartIcon/> Add to cart</Button>
     <AddToCartModal popupOpen={popupOpen} handlePopupClose={handlePopupClose} handlePopupOpen={handlePopupOpen} food={food}/>
    </Box>
  );
}
