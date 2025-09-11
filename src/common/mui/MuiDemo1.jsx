import { Box, Button, Fab, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
export const MuiDemo1 = () => {
  const smallGridStyle = {
    backgroundColor: "grey",
    height: "200px",
    border: "1px solid black",
    borderRadius: "10%",
    fontWeight: "bold",
  };

  return (
    <Box
      sx={{
        minHeight: "200px",
        width: "100%",
        backgroundColor: "whitesmoke",
        height: "auto",
        border: "1px solid black",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">DASHBOARD</Typography>
      <Grid container spacing={2} sx={{ mb: 2, m: 1 }}>

        <Grid
          size={{ xs: 12, md: 8, sm: 12 }}
          sx={{ backgroundColor: "grey", height: "200px" }}
        >
          <Typography>Chart</Typography>
          <Button>DISPLAY</Button>
          <Button variant="outlined">DISPLAY</Button>
          <Button variant="contained">DISPLAY</Button>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4, sm: 12 }}
          sx={{ backgroundColor: "blue", height: "200px" }}
        >
          <Typography>PIE CHART</Typography>
          <Button sx={{backgroundColor:"white",color:"black"}} startIcon={<SendIcon/>}>SEND</Button>
          <Button sx={{backgroundColor:"white",color:"black"}} endIcon={<SendIcon/>}>SEND</Button>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4, sm: 12 }}
          sx={{ ...smallGridStyle, backgroundColor: "blue" }}
        >
          <Typography>USERS : 1000</Typography>
          <IconButton>
            <SpaceDashboardIcon sx={{color:"white"}}/>
          </IconButton>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4, sm: 12 }}
          sx={{ ...smallGridStyle, backgroundColor: "grey" }}
        >
          <Typography>ACTIVE USERS:200</Typography>
          <Fab>
            <FingerprintIcon/>
          </Fab>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4, sm: 12 }}
          sx={{ ...smallGridStyle, backgroundColor: "blue" }}
        >
          <Typography>BANNED USERS:20</Typography>
        </Grid>
        {/* <Grid
          size={{ xs: 12, md: 3, sm: 12 }}
          sx={{ ...smallGridStyle, backgroundColor: "grey" }}
        >
          <Typography>NEW JOINED : 100</Typography>
        </Grid> */}
      </Grid>
    </Box>
  );
};
