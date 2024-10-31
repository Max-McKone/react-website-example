import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Grid, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';

function App() {
  return (
    <Box sx={{ height: '100vh', backgroundColor: '#1E3A8A', color: 'white', position: 'relative' }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton>
            <LocationOnIcon sx={{ color: 'white' }} />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            sole.luna.mare
          </Typography>
          <IconButton>
            <EventIcon sx={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Image Grid */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
        <Paper sx={{ borderRadius: '50%', overflow: 'hidden', height: '80%', width: '80%', display: 'flex', flexWrap: 'wrap', position: 'relative' }}>
          <Grid container spacing={0} sx={{ width: '100%', height: '100%' }}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Grid item xs={4} key={index} sx={{ position: 'relative', overflow: 'hidden' }}>
                <Box
                  component="img"
                  src="/path-to-your-image.jpg" // replace with actual image source
                  alt="Beach"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: `translateY(${index < 3 ? 0 : '-100%'})`, // adjust positioning for each row
                    transition: 'transform 0.5s',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>

      {/* Footer or branding */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', padding: '16px', backgroundColor: '#1E3A8A' }}>
        <Typography variant="caption">© Your Brand | All Rights Reserved</Typography>
      </Box>
    </Box>
  );
}

export default App;