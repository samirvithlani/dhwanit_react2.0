import { Dashboard } from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const UserNavbar = () => {
  const drawerWidth = 240;
  const collapseWidth = 60;
  const [drawerState, setdrawerState] = useState(true);

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
