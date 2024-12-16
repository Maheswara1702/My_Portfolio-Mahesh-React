import React, { useState } from 'react'
import '../Header/Header.css'
import {AppBar,Toolbar,Typography,IconButton, Drawer, List, ListItem,  useTheme, useMediaQuery} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';


const Header = () => {

    const [drawerOpen,setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const toggleDrawer = (open)=>(event)=>{
        if(event.type==="keydown" && (event.key==="Tab" || event.key==="Shift")) return;
        setDrawerOpen(open);
    }

    const menuItems = [
        {label:"HOME",path:"/"},
        {label:"SKILLS",path:"/skills"},
        {label:"ABOUT",path:"/about"},
        {label:"PROJECTS",path:"/project"},
        {label:"CONTACT",path:"/contact"}
    ];


  return (
    <div style={{padding:"0%"}}>
        <AppBar position="static" style={{backgroundColor:"black"}}>
            <Toolbar sx={{margin:".7%"}}>
                <Typography variant = "h5" sx = {{flexGrow:1,cursor:'pointer',fontFamily:'monospace'}}>
                    <Link to={"/"} style={{textDecoration:"none",color:'white'}}>Profile</Link>
                </Typography>
                {!isLargeScreen && (
                <IconButton edge="end"  size="large" onClick={toggleDrawer(true)} style={{color:"white",border:"2px solid gold"}}>
                    <MenuIcon/>
                </IconButton>
                )}
                {isLargeScreen && (
                    <div style={{display:"flex",gap:"30px",justifyContent:"space-between",marginRight:"0.7%"}}>
                        {menuItems.map((item)=>(
                            <Link key={item.label} to={item.path} style={{textDecoration:"none"}}>
                                <Typography variant='button' sx={{cursor:"pointer",textDecoration:"none",color:"white",fontSize:'1.3vw',fontFamily:'monospace',transition:"all 0.3 ease","&:hover":{transform:"scale(1.8)",fontWeight:"bold",fontSize:'1.5vw',color:"orangered"}}}>
                                    {item.label}
                                </Typography>
                            </Link>
                        ))}
                    </div>
                )}
            </Toolbar>
        </AppBar>
        {!isLargeScreen && (
        <Drawer  anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} style={{width:"10vw"}}>
            <List sx={{backgroundColor:"black"}}>
                {menuItems.map((item)=>(
                    <Link key={item.label} to={item.path} style={{textDecoration:"none",color:'inherit'}} onClick={toggleDrawer(false)}>
                        <ListItem button onClick={toggleDrawer(false)} sx={{transition:"all 0.3 ease",textDecoration:'none',fontWeight:"bold",cursor:"pointer",color:"orange","&:hover":{transform:"scale(1.1)",backgroundColor:theme.palette.grey[200],},}}>
                            {item.label}
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
        )}
    </div>
  )
}

export default Header