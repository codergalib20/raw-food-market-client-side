import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import swal from "sweetalert";

export default function AllAdmin({ admin, admins, setAdmins }) { 
  const useStyle = makeStyles({
    button: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white !important",
      height: 48,
      marginTop: "15px !important",
      fontWeight: "bold",
      padding: "0 30px !important",
    },
  });
  const deleteCartProduct = (id) => {
    swal({
      title: "Are you sure for deleting?",
      text: "Once deleted, you will not be able to recover this admin all data",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = admins.filter(
              (service) => service._id !== id
            );
            setAdmins(remaining);
          });
        swal("Poof! Your admin has been deleted! from user and admin list", {
          icon: "success",
        });
      } else {
        swal("Your admin data is safe!");
      }
    });
  };
  const { itemsArea, itemArea, button } = useStyle();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ background: "#fe6b8be3", color: "#fff" }}
      >
        <Typography className={itemsArea}>
          <span className={itemArea}>{admin.displayName}</span>
        </Typography>
        <Divider/>
      </AccordionSummary>
      <AccordionDetails
        className={{ itemsArea }}
        sx={{ background: "#ff8f53ec", color: "#fff" }}
      >
        <Typography>
          <span className={itemArea}>{admin.email}</span>
        </Typography>
        <Divider/>
        <Typography >
          <span className={itemArea}>{admin.createdAt}</span>
        </Typography>
        <Divider/>
        <Box>
          <Button
            onClick={() => deleteCartProduct(admin._id)}
            className={button}
          >
            Delete
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
