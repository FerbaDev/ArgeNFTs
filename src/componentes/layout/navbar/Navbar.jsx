import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CartWidget from "./Carrito";
import { Link } from "react-router-dom";
import { menuNavbar } from "../../../routes/menuNavbar";
import "./navbar.css";

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PhotoLibraryIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Link to="/home" style={{ textDecoration: "none", color: "alice" }}>
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

            <Typography textAlign="center"></Typography>
          </Box>
          <PhotoLibraryIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Link to="/home">
            <Typography
              variant="h5"
              noWrap
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
            {menuNavbar.map(({ id, path, title }) => (
              <Link key={id} to={path}>
                {title}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1em",
                alignItems: "center",
              }}
            >
              <Link to="/cart">
                <CartWidget />
              </Link>
              <Link to="/firebase-auth">Conectarse</Link>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
