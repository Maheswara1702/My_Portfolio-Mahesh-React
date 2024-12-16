import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Box} from '@mui/material';
const Footer = () => {
  return (
    <div>
        <Box sx={{textAlign:'center',backgroundColor:'black',color:"gold",padding:"1%",display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            
                <CopyrightIcon/> Mahesh. All Rights Reserved.
            
        </Box>
        
    </div>
  )
}

export default Footer