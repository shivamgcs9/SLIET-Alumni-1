import * as React from 'react';
import Title from './Title';
import Forms from './Forms';
import Box from '@mui/material/Box';


export default function ProfileSetup() {
  return (
    <React.Fragment>
      <Title>
         <h3 style={{color: '#000', textAlign: 'center'}}> 
         PROFILE INFORMATION
         </h3>
      </Title>
      <Box 
       sx={{
        p: 2, 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 14,
        backgroundColor: '#fff',
      }}
      >
          <Forms/>
      </Box>
      
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        
      </Link> */}
    </React.Fragment>
  );
}