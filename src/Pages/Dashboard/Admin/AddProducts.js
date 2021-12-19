import { Box, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

export default function AddProducts() {
  const useStyle = makeStyles({
    popupCloseButton: {
      position: "absolute",
      top: "5px",
      right: "5px",
      background: "#fff !important",
      color: "#444 !important",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 0px 10px #fe6b8b",
      cursor: "pointer",
    },
    popupBox: {
      position: "relative",
    },
    addCartConfirm: {
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white !important",
      height: 48,
      marginTop: "15px !important",
      fontWeight: "bold",
      padding: "0 30px !important",
      transition: "all 0.5s ease-in-out !important",
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
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
    selectField:{
      width: "100% !important",
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      height: '48px !important',
      padding: '1rem',
      margin: "1rem 0",
    },
    
  });
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://fierce-meadow-56103.herokuapp.com/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal("Complete", "Product added to cart!", "success");
          reset();
        }
      })
      .catch((err) => console.log(err));
    // reset Form___
  }
  const { addToCartTextField,selectField,addCartConfirm } = useStyle();
  return (
    <Box>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={addToCartTextField}
            sx={{ width: "100%", marginTop: "10px" }}
            {...register("title", { required: true })}
            placeholder="Title"
          />
          <TextField
            className={addToCartTextField}
            sx={{ width: "100%", marginTop: "10px" }}
            {...register("image", { required: true })}
            placeholder="image"
          />
          <TextField
            className={addToCartTextField}
            sx={{ width: "100%", marginTop: "10px" }}
            {...register("image2", { required: true })}
            placeholder="image2"
          />
          <TextField
            className={addToCartTextField}
            sx={{ width: "100%", marginTop: "10px" }}
            {...register("price", { required: true })}
            placeholder="price"
          />
          <TextField
            className={addToCartTextField}
            sx={{ width: "100%", marginTop: "10px" }}
            {...register("description", { required: true })}
            placeholder="Description"
          />
          <TextField
            className={addToCartTextField}
            sx={{ width: "100%", marginTop: "10px" }}
            {...register("description2", { required: true })}
            placeholder="Description2"
          />
          <select className={selectField}
             {...register("category", { required: true })}>
            <option className={selectField} value="low">Low</option>
            <option className={selectField} value="top">Top</option>
          </select>
          <Button className={addCartConfirm} type="submit" >Add Product</Button>
        </form>
      </Box>
    </Box>
  );
}
