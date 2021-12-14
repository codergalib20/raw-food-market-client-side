import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
export default function Feature({ feature }) {
  const { title, description, img } = feature;

  const useStyle = makeStyles({
    featureCard: {
      border: "3px solid #333",
      minHeight: "490px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center !important",
      transition: "all 0.4s ease-in-out !important",
      "&:hover": {
        border: "3px solid #fe6b8b",
      },
      "&:active": {
        borderColor: "#880E4F",
      }
    },
    featureButton: {
      background: "transparent",
      border: "3px solid #333 !important",
      display: "inline-block",
      padding: "10px 25px !important",
      marginTop: "20px !important",
      color: "#333 !important",
      fontWeight: "bold !important",
      transition: "all 0.4s ease-in-out !important",
      "&:hover": {
        background: "#fe6b8b !important",
        color: "#fff !important",
        borderColor: '#fe6b8b !important',
      },
      "&:active": {
        background: "#880E4F !important",
        borderColor: "#880E4F !important",
      }
    },
  });
  const classes = useStyle();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.featureCard}>
        <Box sx={{ margin: "0 auto", textAlign: "center", py: "30px" }}>
          <img sx={{ margin: "0 auto" }} src={img} alt="" />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" align="center" component="h2">
            {title}
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ fontSize: "16px", lineHeight: "22px" }}
            align="center"
            component="p"
          >
            {description?.substring(0, 100)}
          </Typography>
          <CardActions sx={{textAlign:'center', width: '100%', margin: '0 auto', flexDirection: 'column'}}>
            <Button className={classes.featureButton}>Read More</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}
