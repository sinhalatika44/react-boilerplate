import logo from '../logo.svg';
import '../App.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import ProTip from '../../containers/common/ProTip';
// import Link from '../../containers/common/Link';
// import { Navigate } from 'react-router-dom';
// import Copyright from '../../containers/common/Copyright';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <div className="App">
            <Typography variant="h4" component="h1" gutterBottom>
            Material UI - Next.js example
            </Typography>
            <img src={logo} className="App-logo" alt="logo" />
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
        </div>
      </Box>
    </Container>
  );
}

export default App;
