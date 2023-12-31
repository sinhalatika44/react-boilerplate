import * as React from 'react';
import { Navigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicMenu from '../containers/common/Navigation';
import AccountMenu from '../containers/common/AccountMenu';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import BasicTabs from '../containers/common/TabMenu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import WebsiteMenu from './WebsiteMenu';
import Footer from './Footer';
import Footer2 from './Footer2';

import Divider from '@mui/material/Divider';
// or
// import { Divider } from '@mui/material';
// import ProTip from '../../containers/common/ProTip';
// import Link from '../../containers/common/Link';
// import { Navigate } from 'react-router-dom';
// import Copyright from '../../containers/common/Copyright';

function HomePage() {
  return (
    <>
    <Container maxWidth="lg">
        <Box sx={{ my: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography component="h5">
            App Zest
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Tooltip title="Login">
              <Button variant="outlined">
                  Login
              </Button>
          </Tooltip>
        </Grid>
        </Grid>
        </Box>
        <Divider/>
      <Box sx={{ my: 4 }}>
        {/* <BasicMenu/> */}
        <Container maxWidth="md">
        <WebsiteMenu/>
          </Container>
            {/* <div className="App">
                <Typography variant="h4" component="h1" gutterBottom>
                Material UI - Next.js example
                </Typography>
                <img src={'https://substack.com/img/cohorts/podcasters/podcast-hero.png'} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </div> */}
      </Box>
    </Container>
    <Footer2/>
    </>
  );
}

export default HomePage;
