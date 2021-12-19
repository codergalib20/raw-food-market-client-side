import {
  Box,
  Button,
  Grid,
  Input,
  Paper,
  Rating,
  TextField,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
export default function UserReview() {
  const useStyle = makeStyles({
    addCartConfirm: {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white !important",
      height: 48,
      marginTop: "15px !important",
      fontWeight: "bold",
      padding: "0 30px !important",
      transition: "all 0.5s ease-in-out !important",
      "&:active": {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .5)",
        color: "white !important",
      },
    },
    addToCartTextField: {},
    quantitySliderStyle: {
      color: "#fe6b8b !important",
    },
  });
  const { addCartConfirm, addToCartTextField } = useStyle();
  const { user } = useAuth();
  const [today, setToday] = React.useState(new Date());
  const [image, setImage] = React.useState(null);
  const [rating, setRating] = React.useState(0);
  console.log(rating);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    data.date = today.toLocaleDateString();
    if (!image) {
      swal(
        "Please upload a photo",
        "You don't submit without image",
        "warning"
      );
      return;
    }
    if (!rating) {
      swal(
        "Please set a rating",
        "You don't submit review without rating",
        "warning"
      );
      return;
    }
    formData.append("image", image);
    formData.append("date", today.toLocaleDateString());
    formData.append("rating", rating);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    fetch("https://fierce-meadow-56103.herokuapp.com/review", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          swal("Thank you for your review", "", "success");
          reset();
        } else {
          swal("Something went wrong", "", "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box>
      <Typography variant="h4">
        <Box>User Review</Box>
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={3}>
          <Box
            sx={{
              width: "100%",
              p: "1rem",
              my: "1rem",
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Input
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  // id="icon-button-file"
                  type="file"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Rating
                  name="half-rating"
                  onChange={(e) => setRating(e.target.value)}
                  defaultValue={0}
                  precision={0.5}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <TextField
          className={addToCartTextField}
          sx={{ width: "100%", marginTop: "10px" }}
          id="outlined-textarea"
          label="Full Name"
          placeholder="Full Name"
          defaultValue={user.displayName}
          {...register("name", { required: true })}
          multiline
          size="small"
        />
        <TextField
          className={addToCartTextField}
          sx={{ width: "100%", marginTop: "10px" }}
          id="outlined-textarea"
          label="Email"
          placeholder="Email"
          {...register("email", { required: true })}
          multiline
          size="small"
          defaultValue={user.email}
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          sx={{ width: "100%", marginTop: "15px" }}
          {...register("message", { required: true })}
          multiline
          rows={4}
        />
        <Button className={addCartConfirm} type="submit">
          Add Review
        </Button>
      </form>
    </Box>
  );
}
