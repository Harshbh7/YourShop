// src/components/SideBar.jsx
import { Drawer, List, ListItem, ListItemText, Toolbar, Typography, Box, ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import logo from "../assets/logo.png";

const SideBar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Bill", path: "/bill", icon: <ReceiptIcon /> },
    { text: "Order", path: "/order", icon: <ShoppingCartIcon /> },
    { text: "Product", path: "/product", icon: <CategoryIcon /> },
    { text: "Customer", path: "/customer", icon: <PeopleIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "20%",
          boxSizing: "border-box",
          backgroundColor: "#1F2937",
          color: "white",
        },
      }}
    >
      <Toolbar sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingY: 2 }}>
        {/* Logo */}
        <Box
          component="img"
          src={logo} // Replace with your logo URL
          alt="Logo"
          sx={{ width: 250, height: 150, marginBottom: 1 }}
        />
        
      </Toolbar>

      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => navigate(item.path)}
            sx={{
              "&:hover": { backgroundColor: "#1A252F" },
              paddingY: 1.5,
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} sx={{ fontWeight: "bold" }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
