import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Notes from '../../pages/dashboard/Notes';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Notes" {...a11yProps(2)} />
          <Tab label="Favourites" {...a11yProps(3)} />
          <Tab label="Drafts" {...a11yProps(4)} />
          <Tab label="Settings" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={2}>
            <Grid item xs={9}>
            Home
            </Grid>
            <Grid item xs={3}>
                <Tooltip title="Create a new Note">
                    <Button variant="outlined">
                        Create Note
                    </Button>
                </Tooltip>
            </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography mt={2} variant="h4" component="h4">
            Introduction to a Notes App:
        </Typography>
        <p>
        A notes app is a simple yet powerful application designed to help users capture and organize their thoughts, ideas, reminders, and other important pieces of information. With the convenience of digital note-taking, users can access and manage their notes anytime, anywhere, using various devices such as smartphones, tablets, or computers. The app provides a user-friendly interface to create, edit, delete, and categorize notes, making it an indispensable tool for personal and professional use.
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Notes/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Your notes
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Your notes
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Your notes
      </CustomTabPanel>
    </Box>
  );
}