import React from 'react'
import "../Home/Home.css";
import profilePic from "../../ASSESTS/Images/profilePic.jpg";
import { Avatar, Box, Typography, useMediaQuery, useTheme } from '@mui/material';


const Home = () => {

  const theme=useTheme();
  const isSmallScreen=useMediaQuery(theme.breakpoints.down("sm"));
  // const profiles = {name:"BIJJAM RAMA SAI MAHESWARA REDDY",role:"JAVA FULL STACK DEVELOPER"};
  // const [currentIndex,setCurrentIndex]=useState(0);

  //   useEffect(()=>{
  //     const interval = setInterval(()=>{
  //       setCurrentIndex((prevIndex)=>(prevIndex+1)%profiles.length);
  //     },3000);
  //     return ()=>clearInterval(interval);
  //   },[profiles.length]);

  return (
    <div className='container'>
        <Box id="homeSection" sx={{backgroundImage:"linearGradient(75deg,blue,green)"}}>
          <Box sx={{display:"flex",flexDirection:isSmallScreen?"column":"row",alignItems:"center",justifyContent:"center",minHeight:"80vh",textAlign:"center",padding:2,gap:isSmallScreen?2:5}}>
              <Avatar alt='MyProfile' src={profilePic} sx={{width:"35%",height:"35%",marginBottom:isSmallScreen?1:0}}/>
              <Box>
                  <Typography variant={isSmallScreen?"h5":"h4"} sx={{color:"black",fontFamily:'monospace',fontWeight:'bold'}} gutterBottom>
                    BIJJAM RAMA SAI MAHESWARA REDDY
                  </Typography>
                  <Typography variant={isSmallScreen?"h6":"h5"} sx={{color:"black",fontFamily:'monospace',fontWeight:'bold'}} gutterBottom>
                     JAVA FULL STACK DEVELOPER
                  </Typography>
              </Box>
          </Box>
        </Box>
    </div>
  )
}

export default Home