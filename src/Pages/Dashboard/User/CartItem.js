import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

export default function CartItem({ item }) {
  const useStyle = makeStyles({
    itemsArea: {
      display: "flex !important",
      justifyContent: "space-between !important",
      width: "100% !important",
      px: "1rem !important",
      fontWeight: "600 !important",
    },
    itemArea:{
      width: '32% !important',
    },
    button: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white !important",
      height: 48,
      marginTop: "15px !important",
      fontWeight: "bold",
      padding: '0 30px !important',
    },
  });
  console.log(item);
  const { itemsArea ,itemArea,button} = useStyle();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ background: "#fe6b8be3", color: "#fff" }}
      >
        <Typography className={ itemsArea }>
          <span className={itemArea}>{item.date}</span>
          <span className={itemArea}>{item.name}</span>
          <span className={itemArea}>{item.email}</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        className={{ itemsArea }}
        sx={{ background: "#ff8f53ec", color: "#fff" }}
      >
        <Typography className={ itemsArea }>
          <span className={itemArea}>{item.quantity}</span>
          <span className={itemArea}>{item.title}</span>
          <span className={itemArea}>{item.price}</span>
        </Typography>
        <Typography className={ itemsArea }>
          <span className={itemArea}>{item.city}</span>
          <span className={itemArea}>{item.street}</span>
          <span className={itemArea}>{item.phone}</span>
        </Typography>
        <Box>
          <Button className={button}>Confirm</Button>
          <Button sx={{marginLeft: '1rem'}} className={button}>Delete</Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
