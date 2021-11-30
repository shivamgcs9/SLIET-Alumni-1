import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import ProfilePhoto from './ProfilePhoto';
import ProfileInfo from './ProfileInfo';
import ProfileSetup from './ProfileSetup';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import { pink } from '@mui/material/colors';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://sliet.ac.in/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      backgroundImage: 'linear-gradient(to right top, #0435bf, #5858cd, #847cd9, #aaa2e6, #cfc9f1, #cedcf9, #d9ecfc, #edfaff, #cdfbff, #a7fdff, #78feff, #34fffa)',
      // backgroundImage: 'linear-gradient(to right top, #34fffa, #78feff, #a7fdff, #cdfbff, #edfaff, #d9ecfc, #cedcf9, #cfc9f1, #aaa2e6, #847cd9, #5858cd, #0435bf)',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme()

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ 
        display: 'flex', 
        // backgroundImage: 'linear-gradient(to right top, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #fbfdff, #f5fbff, #edfaff, #cdfbff, #a7fdff, #78feff, #34fffa)',
        }}>
        <CssBaseline />
        <AppBar 
        position="absolute" 
        open={open} 
        style={{backgroundColor: 'white',
        // backgroundImage: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
        backgroundImage: 'linear-gradient(to right top, #34fffa, #78feff, #a7fdff, #cdfbff, #edfaff, #d9ecfc, #cedcf9, #cfc9f1, #aaa2e6, #847cd9, #5858cd, #0435bf)'
      }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon 
              sx={{ color: pink[500], 
              '&:hover':{
                color: "#000",
                opacity:[0.9],
              },
              }}
              
              />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="#000"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              DASHBOARD
            </Typography>
            <IconButton color="inherit">
              <Badge color="secondary">
              <Avatar
                  sx={{ bgcolor: blue[500] }}
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
              >
                  H
              </Avatar>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* DRAWER */}
        <Drawer 
        variant="permanent" 
        open={open}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon fontSize="large" sx={{ color: pink[500] }} />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        
        <Box
          component="main"
          sx={{
            // backgroundColor: (theme) =>
            //   theme.palette.mode === 'light'
            //     ? theme.palette.grey[100]
            //     : theme.palette.grey[900],
            backgroundImage: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
            // backgroundImage: 'linear-gradient(to right top, #34fffa, #78feff, #a7fdff, #cdfbff, #edfaff, #edfaff, #edfaff, #edfaff, #cdfbff, #a7fdff, #78feff, #34fffa)',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* ProfilePhoto */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    borderRadius: 16,
                    backgroundImage: 'linear-gradient(to right top, #34fffa, #78feff, #a7fdff, #cdfbff, #edfaff, #d9ecfc, #cedcf9, #cfc9f1, #aaa2e6, #847cd9, #5858cd, #0435bf)',
                    // background: 'rgb(30, 136, 229)',
                    opacity: '1.2',
                  }}
                >
                  <ProfilePhoto />
                </Paper>
              </Grid>
              {/* Name display */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    borderRadius: 16,
                    borderColor:'rgba(144, 202, 249, 0.46)',
                    // backgroundColor: 'rgb(30, 136, 229)',
                    backgroundImage: 'linear-gradient(to right top, #34fffa, #78feff, #a7fdff, #cdfbff, #edfaff, #d9ecfc, #cedcf9, #cfc9f1, #aaa2e6, #847cd9, #5858cd, #0435bf)',
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  <ProfileInfo />
                </Paper>
              </Grid>
              {/* Profile Setup Info */}
              <Grid item xs={12}>
                <Paper 
                sx={{ 
                  p: 2, 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 16,
                  borderColor:'rgba(144, 202, 249, 0.46)',
                  // backgroundColor: '#2196f3',
                  backgroundImage: 'linear-gradient(to right top, #34fffa, #78feff, #a7fdff, #cdfbff, #edfaff, #d9ecfc, #cedcf9, #cfc9f1, #aaa2e6, #847cd9, #5858cd, #0435bf)',
                  color: 'rgb(255, 255, 255)',
                  }}>
                  <ProfileSetup />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}