import React from 'react'
import Typography from '@mui/material/Typography'
import "./Skills.css"
import {Box, CardMedia,Card, CardContent, Grid} from '@mui/material'
import image1 from "../Skills/React.jpg";
import image2 from "../Skills/java.jpg";
import image3 from "../Skills/j2ee.jpg";
import image4 from "../Skills/spring boot.jpg";
import image5 from "../Skills/js.jpg";
import image6 from "../Skills/html.jpg";
import image7 from "../Skills/mysql.jpg";
import image8 from "../Skills/oracle.jpg";
import image9 from "../Skills/git.jpg";



const Skills = () => {

    const skills = [

        {title:"React Js",description:"Building dynamic single page applications",
            skillImage:image1,
        },
        {title:"Java",description:"Experience with Data Structure and Core java",
            skillImage:image2,
        },
        {title:"J2EE (Advanced Java)",
            description:"Experience with Advanced Java concepts like Servlets,Jsp,Hibernate",
            skillImage:image3,
        },
        {title:"Spring Boot",description:"Advanced Java concept to build complex scenario and reducing the code using java",
            skillImage:image4,
        },
        {title:"JavaScript",description:"Building the Funcionalities for Websites and Applications",
            skillImage:image5,
        },
        {title:"HTML/CSS",description:"Building responsive websites with HTML 5 and CSS3",
            skillImage:image6,
        },
        {title:"MYSQL",description:"Relational Database for Backend",
            skillImage:image7,
        },
        {title:"ORACLE",description:"Relational Database for Backend",
            skillImage:image8,
        },
        {title:"VERSION CONTROL(GIT)",description:"Experience with ES6+, React Js",
            skillImage:image9,
        }
    ];
  return (
    <div>
        <Box id="skillSection" sx={{minHeight:"100vh",backgroundColor:"#1B1A55"}}>
            <Typography variant="h3" color="orangered" textAlign={'center'} sx={{padding:"1%",fontWeight:"bold"}}>
                Skills
            </Typography>
            <Box sx={{textAlign:"center",padding:3,display:"flex"}}>
                <Grid container spacing={2} sx={{flexWrap:"wrap",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    {skills.map((skill)=>(
                        <Grid item  xs={12} sm={6} md={4} lg={3} sx={{border:"none",margin:"1%",minWidth:"20vw",padding:"1%"}}>
                            <Card  variant='outlined'  sx={{padding:"2px",maxWidth:345,margin:"2%",border:"1px silver",backgroundColor:"black",boxShadow:"10px 10px 10px black ",color:"green","&:hover":{flexGrow:1,cursor:"pointer",color:'white',transform:"scale(1.3)"}}}>
                                <CardMedia component="img" height={200} image={skill.skillImage} alt={skill.title}/>
                                <CardContent>
                                    <Typography variant='h6' component="div" gutterBottom>
                                        {skill.title}
                                        
                                    </Typography>
                                    <Typography variant='body2' component="div" gutterBottom color='white' >
                                        {skill.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                     ))}

                </Grid>
            </Box>
            
        </Box>
    </div>
  )
}

export default Skills;