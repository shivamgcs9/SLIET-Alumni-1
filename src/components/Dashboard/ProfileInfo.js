import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import profile from '../../assets/profile2.jpeg';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Typography component="p" variant="h4" padding="30px" color="#000">
              HARSIMRAN SINGH
          </Typography>
        </Grid>
        <Grid item xs={8}>
        <ButtonBase sx={{ width: 515, height: 207 }}>
            <Img 
            alt="complex" 
            src={profile} 
            sx={{ width: 300, height: 250, borderRadius: 14,}}
            />
          </ButtonBase>
        </Grid>
      </Grid>
    </Box>
  );
}






// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import Button from '@mui/material/Button';
// // import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
// import profile from '../../assets/profile.jpg';

// export default function ProfileInfo() {
//   return (
//     <React.Fragment>
//       <Box>
//         <Typography component="p" variant="h4" padding="30px">
//            HARSIMRAN SINGH
//         </Typography>
//         <Typography component="p" variant="h4">
        
//         </Typography>
//       </Box>
//       <Box>
//         <img alt='profile' src={profile}/>
//       </Box>  
//       {/* <Typography color="text.primary" sx={{ flex: 1 }}>
//         on 15 March, 2019
//       </Typography> */}
//     {/* <Box 
//       sx={{
//         '& > :not(style)': { m: 1, width: '20ch' },
//       }}>
//       <Button 
//       variant="contained" 
//       startIcon={<FontAwesomeIcon 
//       icon={faInfo} />}>
//         CSE
//       </Button>
//       <Button variant="contained" startIcon={<FontAwesomeIcon icon={faInfo} />}>
//         Batch 2018
//       </Button>
//     </Box> */}
//       {/* </Box> */}
      
//     </React.Fragment>
//   );
// }