import CancelIcon from "@mui/icons-material/Cancel";
import { Button, Slider, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import useAuth from "../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "600px",
  bgcolor: "background.paper",
  boxShadow: "0px 0px 100px #fe6b8b",
  padding: "20px",
  border: "2px solid #fe6b8b",
  p: 4,
};

export default function AddToCartModal({
  handlePopupClose,
  handlePopupOpen,
  popupOpen,
  food,
}) {
  const useStyle = makeStyles({
    popupCloseButton: {
      position: "absolute",
      top: "5px",
      right: "5px",
      background: "#fe6b8b",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      boxShadow: "0px 0px 10px #fe6b8b",
      cursor: "pointer",
    },
    popupBox: {
      position: "relative",
    },
    addCartConfirm: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
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
  const {
    popupCloseButton,
    popupBox,
    addCartConfirm,
    addToCartTextField,
    quantitySliderStyle,
  } = useStyle();

  const { user, setCustomSuccess } = useAuth();
  const [num, setNum] = React.useState(1);
  const [price, setPrice] = React.useState(food.price);
  const [today, setToday] = React.useState(new Date());
  const history = useHistory()

  const onChangeQuantity = (e) => {
    const quantity = e.target.value;
    const result = food.price * quantity;
    setPrice(result);
    setNum(quantity);
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.title = food.title;
    data.price = price;
    data.quantity = num;
    data.role = "cart";
    data.date = today.toLocaleDateString();
    console.log(data);
    fetch("http://localhost:5000/cart", {
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
          handlePopupClose()
          history.replace('/foods')
        }
      })
      .catch((err) => console.log(err));
    // reset Form___
    reset();
  };
  console.log(food.price)
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={popupOpen}
        onClose={handlePopupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={popupOpen}>
          <Box className={popupBox} sx={style}>
            <Typography
              onClick={handlePopupClose}
              className={popupCloseButton}
              variant="h6"
              id="transition-modal-title"
            >
              <CancelIcon />
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Set your all Information for add to cart
            </Typography>

            {/* <>------------Main from for add to cart product-------------</> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6">{num}</Typography>
                <Typography variant="h6">$ {price ? price : food.price}</Typography>
              </Box>
              <Typography
                variant="h6"
                fontSize="16px"
                sx={{ mt: "10px" }}
                component="h6"
              >
                Select your food quantity
              </Typography>
              <Slider
                className={quantitySliderStyle}
                defaultValue={1}
                valueLabelDisplay="auto"
                step={1}
                marks
                onChange={onChangeQuantity}
                min={1}
                max={10}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
              </Box>
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
                className={addToCartTextField}
                sx={{ width: "100%", marginTop: "10px" }}
                id="outlined-textarea"
                label="City"
                placeholder="City"
                {...register("city", { required: true })}
                multiline
                size="small"
              />
              <TextField
                className={addToCartTextField}
                sx={{ width: "100%", marginTop: "10px" }}
                id="outlined-textarea"
                label="Street"
                placeholder="Street"
                {...register("street", { required: true })}
                multiline
                size="small"
              />
              <TextField
                className={addToCartTextField}
                sx={{ width: "100%", marginTop: "10px" }}
                id="outlined-textarea"
                label="Phone"
                placeholder="Phone"
                {...register("phone", { required: true })}
                multiline
                size="small"
                autoFocus={true}
              />
              <Button type="submit"  className={addCartConfirm}>
                More Foods
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
