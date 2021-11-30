import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { blue } from '@mui/material/colors';
import '@fontsource/roboto/300.css';
import { Divider } from '@mui/material';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon sx={{ color: blue[500] }}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon sx={{ color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary="Profile Information" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon sx={{ color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary="Academics" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon sx={{ color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary="Career" />
    </ListItem>
   
  </div>
);

export const secondaryListItems = (
  <div>
    <Divider>More</Divider>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon sx={{ color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VpnKeyIcon sx={{ color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary="Password Change" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactPageIcon sx={{ color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItem>
  </div>
);