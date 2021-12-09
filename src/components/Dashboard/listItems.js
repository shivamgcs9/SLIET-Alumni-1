import * as React from "react";
import { NavLink} from 'react-router-dom'
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { blue } from "@mui/material/colors";
import "@fontsource/roboto/300.css";
import { Divider } from "@mui/material";

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
}
}


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon sx={{ fontSize: "35px", color: blue[500] }} />
      </ListItemIcon>
      <ListItemText  primary={<NavLink to="/dashboard">Dashboard</NavLink>}  />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon sx={{ fontSize: "35px", color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary={<NavLink to="#">Profile Information</NavLink>}  />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon sx={{ fontSize: "35px", color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary={<NavLink to="#">Academics</NavLink>}  />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon sx={{ fontSize: "35px", color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary={<NavLink to="#">Career</NavLink>} />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <Divider sx={{ fontSize: "18px" }}>More</Divider>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon sx={{ fontSize: "35px", color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary={<NavLink exact to="/">Home</NavLink>}  />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VpnKeyIcon sx={{ fontSize: "35px", color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary={<NavLink to="#">Password Change</NavLink>}  />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactPageIcon sx={{ fontSize: "35px", color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary={<NavLink  to="#">Contact Us</NavLink>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactPageIcon sx={{ fontSize: "35px", color: blue[500] }} />
      </ListItemIcon>
      <ListItemText primary={<NavLink
       to="/"
       onClick={() => {
                    signout();
                  }}
       >Sign Out</NavLink>} />
    </ListItem>
  </div>
);
