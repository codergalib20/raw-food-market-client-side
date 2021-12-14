import MenuIcon from "@mui/icons-material/Menu";
import { Container, Divider, ListItem, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const theme = useTheme();
  const useStyles = makeStyles({
    sidebarItem: {
      color: "#FFF",
      fontWeight: "bold",
      marginTop: "20px !important",
      display: "block",
    },
    sidebarMenus: {
      textAlign: "center !important",
      justifyContent: "center !important",
    },
    navStyle: {
      background: "#FE6B8B !important",
    },
    navIcon: {
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
    },
    navItem: {
      marginLeft: "20px",
    },
    navItems: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    navLogo: {
      color: '#fff !important',
      [theme.breakpoints.down("md")]: {
        textAlign: "right",
      },
    },
    navLogoText: {
      color: '#FFF !important',
      fontWeight: "bold",
    }
  });
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const list = (
    <Box
      sx={{ width: 250, background: "#FE6B8B", minHeight: "100%" }}
      role="presentation"
    >
      <List className={classes.sidebarMenus}>
        <NavLink
          to="/"
          className={classes.sidebarItem}
          onClick={() => setState(false)}
        >
          <ListItem
            className={classes.sidebarMenus}
            sx={{
              fontSize: "25px",
              fontWeight: "800",
              color: "#FFF",
              margin: "20px 0",
            }}
          >
            RAW FOODS
          </ListItem>
        </NavLink>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <NavLink className={classes.sidebarItem} to="/home">
          <ListItem
            onClick={() => setState(false)}
            className={classes.sidebarMenus}
            button
          >
            Home
          </ListItem>
        </NavLink>
        <NavLink className={classes.sidebarItem} to="/about">
          <ListItem
            onClick={() => setState(false)}
            className={classes.sidebarMenus}
            button
          >
            About
          </ListItem>
        </NavLink>
        <NavLink className={classes.sidebarItem} to="/foods">
          <ListItem
            onClick={() => setState(false)}
            className={classes.sidebarMenus}
            button
          >
            Foods
          </ListItem>
        </NavLink>
        <NavLink className={classes.sidebarItem} to="/login">
          <ListItem
            onClick={() => setState(false)}
            className={classes.sidebarMenus}
            button
          >
            Login
          </ListItem>
        </NavLink>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={classes.navStyle} position="static">
          <Container>
            <Toolbar>
              <IconButton
                className={classes.navIcon}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className={classes.navLogo}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <Link className={classes.navLogoText} to="/">RAW FOODS</Link>
              </Typography>

              <Box className={classes.navItems}>
                <NavLink className={classes.navItem} to="/home">
                  <Button sx={{ color: "white" }}>Home</Button>
                </NavLink>
                <NavLink className={classes.navItem} to="/about">
                  <Button sx={{ color: "white" }}>About</Button>
                </NavLink>
                <NavLink className={classes.navItem} to="/foods">
                  <Button sx={{ color: "white" }}>Foods</Button>
                </NavLink>
                <NavLink className={classes.navItem} to="/login">
                  <Button sx={{ color: "white" }}>Login</Button>
                </NavLink>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
