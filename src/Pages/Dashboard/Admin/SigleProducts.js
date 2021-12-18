import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider, Grid, Rating } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import swal from "sweetalert";

export default function SigleProducts({ food, foods, setFoods }) {
  const useStyle = makeStyles({
    itemsArea: {
      display: "flex !important",
      justifyContent: "space-between !important",
      width: "100% !important",
      padding: "1rem !important",
      fontWeight: "600 !important",
    },
    itemArea: {
      width: "32% !important",
    },
    button: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white !important",
      height: 48,
      fontWeight: "bold",
      padding: "0 30px !important",
    },
    images: {
      width: "100% !important",
    },
    imageBox: {
      width: "60px !important",
      height: "60px !important",
      borderRadius: "50% !important",
      border: "5px solid #fe6b8be3 !important",
      overflow: "hidden !important",
      display: "flex !important",
      justifyContent: "center !important",
      alignItems: "center !important",
    },
  });
  const deleteCartProduct = (id) => {
    swal({
      title: "Are you sure for deleting?",
      text: "Once deleted, you will not be able to recover this cart Product",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = foods.filter((service) => service._id !== id);
            setFoods(remaining);
          });
        swal("Poof! Your cart product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your cart product is safe!");
      }
    });
  };
  console.log(food);
  const { itemsArea, itemArea, button, images, imageBox } = useStyle();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ background: "#fe6b8be3", color: "#fff" }}
      >
        <Typography className={itemsArea}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <span className={itemArea}>{food.title}</span>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span className={itemArea}>{food.price}</span>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span className={itemArea}>
                <Rating name="half-rating-read" value={food.rating} readOnly />
              </span>
            </Grid>
          </Grid>
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        className={{ itemsArea }}
        sx={{ background: "#fff", color: "#fe6b8be3" }}
      >
        <Typography className={itemsArea}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <span className={itemArea}>{food.title}</span>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span className={itemArea}>{food.price}</span>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span className={itemArea}>
                <Rating name="half-rating-read" value={food.rating} readOnly />
              </span>
            </Grid>
          </Grid>
        </Typography>
        <Divider />
        <Typography className={itemsArea}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <span className={itemArea}>{food.description}</span>
            </Grid>
            <Grid item xs={12} md={6}>
              <span className={itemArea}>{food.description2}</span>
            </Grid>
          </Grid>
        </Typography>
        <Divider />
        <Box>
          <Grid container  spacing={2} sx={{py:'10px'}}>
            <Grid item xs={12} sm={4}>
              <Button
                onClick={() => deleteCartProduct(food._id)}
                sx={{ marginLeft: "1rem" }}
                className={button}
              >
                Delete
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className={imageBox}>
                <img className={images} src={food.image} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12}  sm={4}>
              <Box className={imageBox}>
                <img className={images} src={food.image2} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
