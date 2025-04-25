// src/components/NavBar.jsx
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ width: "80%", ml: "20%", backgroundColor: "#1F2937" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left - Welcome Message */}
        <Typography variant="h6">Welcome, Master</Typography>

        {/* Middle - Navigation Links */}
        <Box>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/add-user")}>Add User</Button>
          <Button color="inherit" onClick={() => navigate("/add-product")}>Add Product</Button>
          <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
          <Button color="inherit" onClick={() => navigate("/contact")}>Contact</Button>
        </Box>

        {/* Right - Logout Icon */}
        <Tooltip title="Logout">
          <IconButton color="error" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
