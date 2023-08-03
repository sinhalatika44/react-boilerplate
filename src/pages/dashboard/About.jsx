import logo from '../../logo.svg';
import '../../App.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicMenu from '../../containers/common/Navigation';
import AccountMenu from '../../containers/common/AccountMenu';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Divider from '@mui/material/Divider';
// or
// import { Divider } from '@mui/material';
// import ProTip from '../../containers/common/ProTip';
// import Link from '../../containers/common/Link';
// import { Navigate } from 'react-router-dom';
import Copyright from '../../containers/common/Copyright';
import BasicTabs from '../../containers/common/TabMenu';

function About() {
  return (
    <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
            <Grid item xs={10}>
        <Typography mb={1} variant="h5" component="h5">
                Free Hire
        </Typography>
        </Grid>
        <Grid item xs={2}>
        <AccountMenu/>
        </Grid>
        </Grid>
        </Box>
        <Divider/>
      <Box sx={{ my: 4 }}>
        <Container maxWidth="sm">
        <BasicTabs/>
          </Container>
          {/* <Divider/> */}
          <Container maxWidth="sm">
            {/* <div className="App">
                <Typography mt={2} variant="h4" component="h4">
                Introduction to a Notes App:
                </Typography>
                <p>
                A notes app is a simple yet powerful application designed to help users capture and organize their thoughts, ideas, reminders, and other important pieces of information. With the convenience of digital note-taking, users can access and manage their notes anytime, anywhere, using various devices such as smartphones, tablets, or computers. The app provides a user-friendly interface to create, edit, delete, and categorize notes, making it an indispensable tool for personal and professional use.
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
            </Container>
      </Box>
    </Container>
  );
}

export default About;
