import React from 'react'
import "./About.css";
import {Typography,Box,Button} from '@mui/material';
import image1 from "../About/award.jpg";
import image2 from "../About/award2.jpg";


const About = () => {
  return (
    <div>
        <Box id="aboutSection" maxHeight="100vh">
            
            <Box sx={{display:'flex',flexDirection:'row',gap:'2px',minHeight:'90vh'}}>
                <Box sx={{width:'50%',textAlign:'center',padding:'2%'}}>
                    <Typography variant="h4" color='darkviolet' sx={{textAlign:'center',fontWeight:'bold'}}>
                        About Me
                    </Typography>
                    <Typography variant='body1'  color="black" sx={{margin:'1%',padding:'1%',display:'flex',flexDirection:'column',justifyContent:'space-between',fontFamily:'monospace',fontSize:'2vw'}}>
                        <div>I am a Computer Science And Engineering graduate from KALLAM HARINADHAREDDY INSTITUTE OF TECHNOLOGY(KHIT) college.</div>
                        <div>I am a passionate Java Full Stck Developer with experience in building web application using modern technologies such as React and expertise lies in Java, Spring Boot, Hibernate with a strong passion for learning new technologies and delivering high quality software solutions.</div>
                        <Box sx={{mt:3,textAlign:'center'}}>
                            <Typography variant="h6" color="red">
                                Want to View My Resume ?
                            </Typography>
                            <Button  onClick={()=>window.open('https://drive.google.com/file/d/11x-by8goPYVbCR6UVXPErs12nA9wRRQg/view?usp=sharing',"_blank")} sx={{border:"2px solid black",backgroundColor:'gold',color:"black",fontWeight:'bold',fontFamily:'monospace',fontSize:'2vw'}}>
                                Download and View Resume
                            </Button>
                        </Box>
                    </Typography>
                </Box>
                <Box sx={{width:'50%',textAlign:'center'}}>
                    <Typography variant="h5" color="textSecondary" sx={{display:'flex',flexDirection:'column',textAlign:'center',padding:'1%'}}>
                        <img src={image1} alt='myaward' height={300} width={300} style={{margin:'2%'}}/>
                        <img src={image2} alt='myaward' height={350} width='95%'/>
                    </Typography>
                </Box>
            </Box>
            
        </Box>
    </div>
  )
}

export default About