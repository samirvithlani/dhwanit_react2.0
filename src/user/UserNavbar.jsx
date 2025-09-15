import { Dashboard, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const UserNavbar = () => {
  const drawerWidth = 240;
  const collapseWidth = 60;
  const [drawerState, setdrawerState] = useState(true);

  const toggleDrawer = () => {
    setdrawerState(!drawerState);
  };

  const sidebarItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "userdashboard" },
    { text: "Profile", icon: <Dashboard />, path: "userprofile" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerState ? drawerWidth : collapseWidth,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerState ? drawerWidth : collapseWidth,
            boxSizing: "border-box",
            bgcolor: "#2e2e42",
            color: "#fff",
            overflowX: "hidden",
            transition: "width 0.3s ease",
          },
        }}
      >
        <Box sx={{ p: 2, textAlign: "center" }}>
          {drawerState ? (
            <Typography>USER</Typography>
          ) : (
            <Typography>U</Typography>
          )}
        </Box>
        <List>
          {sidebarItems.map(({ text, path, icon }) => {
            return (
              <ListItem
                button
                component={Link}
                to={path}
                sx={{
                  bgcolor: "#2e2e42",
                  "&:hover": { bgcolor: "#3a3a55" },
                  color: "#fff",
                  transition: "0.3s",
                }}
              >
                <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
                  {icon}
                </ListItemIcon>
                {drawerState && <ListItemText primary={text}></ListItemText>}
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#fff",
          color: "#000",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          borderBottom: "1px solid #0b44eeff",
          ml: drawerState ? `${drawerWidth}px` : `${collapseWidth}px`,
          width: `calc(100% - ${drawerState ? drawerWidth : collapseWidth}px)`,
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton onClick={toggleDrawer}>
            <Menu />
          </IconButton>
          <Typography variant="h6" fontWeight={600}>
            USER APP BAR
          </Typography>
          <Typography variant="body1" color="black">
            Hello,User
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          //ml: drawerState ? `${drawerWidth}px` : `${collapsedWidth}px`,
          transition: "all 0.3s ease",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
