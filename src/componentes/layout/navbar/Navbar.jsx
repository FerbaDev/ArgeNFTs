import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CartWidget from "./Carrito";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PhotoLibraryIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Link to="/" style={{ textDecoration: "none", color: "alice" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              ArgenNFTs
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Typography textAlign="center"></Typography>
            </Menu>
          </Box>
          <PhotoLibraryIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Link to="/">
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ArgenNFTs
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Link to={"/"}>General</Link>
            <Link to={"/categoria/sailenore"}>Sailenore</Link>
            <Link to={"/categoria/robosepu"}>Robosepu</Link>
            <Link to={"/categoria/pixelfaces"}>Pixel Faces</Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Link to="/cart">
                <CartWidget />
              </Link>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
