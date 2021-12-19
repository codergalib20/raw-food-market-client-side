import MenuIcon from "@mui/icons-material/Menu";
import { ListItem, ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AddProducts from "./Admin/AddProducts";
import AllOrders from "./Admin/AllOrders";
import MakeAdmin from "./Admin/MakeAdmin";
import ManageProduct from "./Admin/ManageProduct";
import UsersAdmin from "./Admin/UsersAdmin";
import Dashboard from "./Dashboard";
import AddToCart from "./User/AddToCart";
import MyOrders from "./User/MyOrders";
import UserReview from "./User/UserReview";

const drawerWidth = 240;
export default function ResponsiveDrawer(props) {
  let { path, url } = useRouteMatch();

  const useStyle = makeStyles({
    responsiveShadow: {
      background:
        "linear-gradient(45deg, RGBA(33,150,243,0.62) 30%, RGBA(33,203,243,0.68) 90%) !important",
    },
    drawerPaper: {
      background: "linear-gradient(-90deg, #FE6B8B 30%, #FF8E53 90%)",
      minHeight: "100vh",
    },
    dashboardMenuButton: {
      color: "white",
      fontWeight: "bold",
      transition: "all 1s !important",
      "&:hover": {
        background: "linear-gradient(40deg, #fe6b8be3, #ff8f53ec)",
      },
      "&:active": {
        background: "linear-gradient(40deg, #ff8f53ec, #fe6b8be3))",
      },
    },
  });
  const { responsiveShadow, drawerPaper, dashboardMenuButton } = useStyle();
  const { user, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={drawerPaper}>
      <Toolbar />
      <Divider />
      <List>
        <Link to="/home">
          <ListItem button className={dashboardMenuButton}>
            <ListItemText align="center">Home</ListItemText>
          </ListItem>
        </Link>
        <Link to={`${url}`}>
          <ListItem button className={dashboardMenuButton}>
            <ListItemText align="center">Dashboard</ListItemText>
          </ListItem>
        </Link>
        {admin ? (
          <Box>
            <Link to={`${url}/allOrders`}>
              <ListItem button className={dashboardMenuButton}>
                <ListItemText align="center">All Orders</ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/makeAdmin`}>
              <ListItem button className={dashboardMenuButton}>
                <ListItemText align="center">Make Admin</ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/manageProducts`}>
              <ListItem button className={dashboardMenuButton}>
                <ListItemText align="center">Manage Products</ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/allUsers`}>
              <ListItem button className={dashboardMenuButton}>
                <ListItemText align="center">All Users</ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/addProducts`}>
              <ListItem button className={dashboardMenuButton}>
                <ListItemText align="center">Add Products</ListItemText>
              </ListItem>
            </Link>
          </Box>
        ) : (
          <Box>
            <Link to={`${url}/myOrders`}>
              <ListItem button className={dashboardMenuButton}>
                <ListItemText align="center">My Orders</ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/addToCart`}>
              <ListItem button className={dashboardMenuButton}>
                <ListItemText align="center">Add To Cart</ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/usersReview`}>
              <ListItem button className={dashboardMenuButton}>
                <ListItemText align="center">User Review</ListItemText>
              </ListItem>
            </Link>
          </Box>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        background:
          "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%) !important",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(-90deg, #FE6B8B 30%, #FF8E53 90%)",
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ textTransform: "uppercase" }}
            noWrap
            component="div"
          >
            {user.displayName} it's your dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
          background:
            "linear-gradient(-90deg, #FE6B8B 30%, #FF8E53 90%) !important",
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          className={responsiveShadow}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          className={drawerPaper}
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography>
          <Switch>
            <Route exact path={path}>
              <div className="animationPageOpen">
                <Dashboard />
              </div>
            </Route>
            <Route path={`${path}/myOrders`}>
              <div className="animationPageOpen">
                <MyOrders />
              </div>
            </Route>
            <Route path={`${path}/addProducts`}>
              <div className="animationPageOpen">
                <AddProducts />
              </div>
            </Route>
            <Route path={`${path}/AddToCart`}>
              <div className="animationPageOpen">
                <AddToCart />
              </div>
            </Route>
            <Route path={`${path}/AllOrders`}>
              <div className="animationPageOpen">
                <AllOrders />
              </div>
            </Route>
            <Route path={`${path}/MakeAdmin`}>
              <div className="animationPageOpen">
                <MakeAdmin />
              </div>
            </Route>
            <Route path={`${path}/ManageProducts`}>
              <div className="animationPageOpen">
                <ManageProduct />
              </div>
            </Route>
            <Route path={`${path}/allUsers`}>
              <div className="animationPageOpen">
                <UsersAdmin />
              </div>
            </Route>
            <Route path={`${path}/usersReview`}>
              <div className="animationPageOpen">
                <UserReview />
              </div>
            </Route>
          </Switch>
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
