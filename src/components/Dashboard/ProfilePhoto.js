import React from 'react'
import Box from '@mui/material/Box';
import img from '../../assets/img.jpg';


   
function ProfilePhoto() {
    return (
        <React.Fragment>
           <Box sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
              <img style={{height: '100%', width: '100%', borderRadius: '25%'}}
                 src={`${img}?w=164&h=164&fit=crop&auto=format`}
                 srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                 alt="profileImage"
                 loading="lazy"
              />
          </Box>
      </React.Fragment>
    )
}

export default ProfilePhoto;

















// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';

// // Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

// export default function Chart() {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>Today</Title>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis
//             dataKey="time"
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           />
//           <YAxis
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           >
//             <Label
//               angle={270}
//               position="left"
//               style={{
//                 textAnchor: 'middle',
//                 fill: theme.palette.text.primary,
//                 ...theme.typography.body1,
//               }}
//             >
//               Sales ($)
//             </Label>
//           </YAxis>
//           <Line
//             isAnimationActive={false}
//             type="monotone"
//             dataKey="amount"
//             stroke={theme.palette.primary.main}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }

