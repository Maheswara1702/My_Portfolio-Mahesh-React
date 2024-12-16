import React from 'react'
import {Typography,Box, TextField, Button, IconButton,} from '@mui/material'
import {LinkedIn,GitHub} from "@mui/icons-material";
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';
import './Contact.css';

const Contact = () => {

  

  return (
    <div>
        <Box id="contactSection" sx={{textAlign:'center',width:'100%',minHeight:"85vh"}}>
          <Typography variant="h4" gutterBottom color='darkgreen' fontWeight='bold'>
              Contact Me
          </Typography>
          <Typography variant='h6' color='orangered' gutterBottom>
            Feel free to reach out via the form below or connect with me on LinkedIn and GitHub.
          </Typography>
          <Box  sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',margin:"1%",minHeight:"60vh"}}>
            <Box component="form" sx={{display:"flex",flexDirection:"column",gap:2,maxWidth:500,width:"50%",margin:"1%",padding:"1%",boxShadow:"5px 5px 5px black,-1px -1px 2px black",borderRadius:'4px',backgroundColor:'white'}} noValidate autoComplete='off'>
              <Typography variant="h6" color="blue">
                Contact Form
              </Typography>
              <TextField fullWidth required label="Name" variant='outlined'/>
              <TextField fullWidth required label="Email" type='email' variant='outlined'/>
              <TextField fullWidth required label="Message" multiline rows={4} variant='outlined'/>
              <Button variant='contained' color='primary' size='large' sx={{textTransform:"none"}}>
                Submit
              </Button>
            </Box>
            <Box sx={{display:"flex",flexDirection:'column', justifyContent:'center',gap:2,opacity:1}}>
              <IconButton onClick={()=>window.open("https://www.linkedin.com/in/rama-sai-maheswara-reddy-bijjam-529a0a248","_blank")}>
                <LinkedIn sx={{fontSize:"10vw",color:'blue'}}/>
                <Typography variant='h6' component="body1" color='black'>
                    Check my LinkedIn Profile
                </Typography>
              </IconButton>
              <IconButton onClick={()=>window.open("https://github.com/BIJJAMRAMASAIMAHESWARAREDDY","_blank")}>
                <GitHub sx={{fontSize:"10vw"}} />
                <Typography variant='h6' component="body1" color='black'>
                    Check my GitHub Profile
                </Typography>
              </IconButton>
              
                <IconButton onClick={()=>window.open("mailto:bijjammahesh7@gmail.com","_blank")}>
                  <ContactMailTwoToneIcon sx={{fontSize:'8vw',color:'red'}}/>
                  <Typography variant="h6" component="body1" color='black'>
                      Use this Mail For Communication
                  </Typography>
                </IconButton>
                
              
            </Box>
          </Box>
          
        </Box>
    </div>
  )
}

export default Contact;