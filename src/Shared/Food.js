import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

export default function Food({ food }) {
  const useStyle = makeStyles({
    foodCard: {
      background: "#fe6b8b !important",
      color: "#fff !important",
    },
    foodCardImg: {
      transition: "all 0.4s ease-in-out",
      transform: "scale(1)",
      width: "90%",
      height: "100%",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    foodCardContent: {},
    buyNowButton: {
      background: "#fe6b8b !important",
      border: "2px solid #fff !important",
      fontWeight: "500 !important",
      color: "#fff !important",
      padding: "10px 20px !important",
      transition: "all 0.4s ease-in-out !important",
      "&:hover": {
        background: "#fff !important",
        color: "#fe6b8b !important",
      },
    },
  });
  const { foodCard, foodCardImg, foodCardContent, buyNowButton } = useStyle();

  const { title, description, image, price,_id } = food;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={foodCard}>
        <Box sx={{ overflow: "hidden !important", height: "220px !important" }}>
          <CardMedia
            className={foodCardImg}
            component="img"
            image={image}
            alt="Paella dish"
          />
        </Box>
        <CardContent className={foodCardContent}>
          <Typography gutterBottom variant="h5" fontWeight="600" component="h2">
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ textAlign: "left", fontSize: "17px" }}
            color="#fff"
          >
            {description?.substring(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography variant="h5" color="#fff">$ {price}</Typography>
          <Link to={`/food/${_id}`}>
            <Button className={buyNowButton}>Buy Now</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
