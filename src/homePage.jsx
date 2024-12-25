import React from 'react';
import backgroundPicture from './image/5575.jpg_wh860.jpg';
import { Grid, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './homePage.css';

export default function HomePage() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="homePageContainer" style={{ backgroundImage: `url(${backgroundPicture})` }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} className="titleGrid">
          <h1 className={`title ${isSmallScreen ? 'small' : isMediumScreen ? 'medium' : 'large'}`}>גיפט קל</h1>
        </Grid>
        <Grid item xs={12}>
          <h2 className={`subtitle ${isSmallScreen ? 'small' : isMediumScreen ? 'medium' : 'large'}`}>
            הדרך הקלה להשתתף בשמחה
          </h2>
        </Grid>
      </Grid>
    </Box>
  );
}
