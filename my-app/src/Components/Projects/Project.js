import React, { useState, useRef } from "react";
import './Project.css';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Pagination,
  IconButton, Button,
} from "@mui/material";
import {GitHub} from "@mui/icons-material";
import image1 from "../../ASSESTS/Images/bankImage2.jpg";
import image2 from "../Projects/Portofolio.png";
import image3 from "../Projects/medical.jpg";
import image4 from "../Projects/bloodBank.png";
import image5 from "../Projects/AtmSimulator.png";
import image6 from "../Projects/Calculator.png";

// Project Data
const projects = [
  {
    id: 1,
    title: "Bank Application using Servlets,JDBC,JSP ",
    description: "It is a Group Project where we used the Advanced java Concepts like JDBC,Servlets and JSP.",
    image: image1,
    link:"https://github.com/BIJJAMRAMASAIMAHESWARAREDDY/Bank-Application-Using-Advanced-Java",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects and About Me.This is website is done using react and material ui.",
    image: image2,
    link:"https://github.com/BIJJAMRAMASAIMAHESWARAREDDY/Bank-Application-Using-Advanced-Java",
  },
  {
    id: 3,
    title: "Preventive Medical Service",
    description: "This is a Medical Service Project where this is a web page using JavaScript,HTML and CSS as a practice",
    image: image3,
    link:"https://github.com/BIJJAMRAMASAIMAHESWARAREDDY/PROJECT-FRT",
  },
  {
    id: 4,
    title: "Blood Bank Management System",
    description: "This is a Team Project where it is developed using PHP,JQuery,AJAX,",
    image: image4,
    link:"https://github.com/BIJJAMRAMASAIMAHESWARAREDDY/BLOOD_BANK_MANAGEMENT_SYSTEM",
  },
  {
    id: 5,
    title: "ATM SIMULATOR",
    description: "This a ATM Webpage Project which has the same functionlity like ATM we used javaScript Advanced Concept likes objects for storing the user details.",
    image: image5,
    link:"https://github.com/BIJJAMRAMASAIMAHESWARAREDDY/Bank-Application-Using-Advanced-Java",
  },
  {
    id: 6,
    title: "Online Calucator",
    description: "It is a Online Calculator which is a mini project developed for practicing of javaScript along with the HTML and CSS. Technologies used are HTML, CSS and JS.",
    image: image6,
    link:"https://github.com/BIJJAMRAMASAIMAHESWARAREDDY/OnlineCalculator",
  },
  
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [page, setPage] = useState(1);
  const cardsPerPage = 3;
  const scrollContainerRef = useRef(null);

  // Handle Pagination Change
  const handlePageChange = (event, value) => {
    setPage(value);
    scrollToPage(value);
  };

  // Scroll to the current page's position
  const scrollToPage = (page) => {
    if (scrollContainerRef.current) {
      const scrollOffset =
        scrollContainerRef.current.scrollWidth / Math.ceil(projects.length / cardsPerPage);
      scrollContainerRef.current.scrollLeft = (page - 1) * scrollOffset;
      setSelectedProject(null); // Clear the description on new page navigation
    }
  };

  // Handle Card Click
  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  

  return (
    <Box id="projectSection" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent:'center', padding: 3 }}>
      {/* Header */}
      
      <Typography variant="h4" color="black" fontWeight="bold" mb={3} display={"flex"} justifyContent={'space-between'} gap={10} width='95%'>
        My Projects
        <IconButton onClick={()=>window.open("https://github.com","_blank")}>
          <GitHub sx={{fontSize:"5vw"}} />
            <Typography variant='h6' component="body1" color='black'>
                Check my GitHub Profile
            </Typography>
        </IconButton>
      </Typography>

      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        {/* Cards Container */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2,
            padding: 2,
            height:'60vh',
            width:'90vw',
            backgroundColor:'black',
            borderRadius:'20px'
          }}
        >
          {projects
            .slice((page - 1) * cardsPerPage, page * cardsPerPage)
            .map((project) => (
              <Card
                key={project.id}
                onClick={() => handleCardClick(project)}
                sx={{
                  width:"90%",height:'60vh',
                  boxShadow: 3,
                  cursor: "pointer",
                  ":hover": {
                    transform: "scale(1.2)",
                    transition: "0.3s",
                  },
                }}
              >
                <CardMedia
                  component="img" style={{tabSize:'100%'}}
                  sx={{height:'35vh'}}
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{height:'5vh'}}>
                  <Typography variant="body1" textAlign="center" fontWeight="bold" fontSize="2vw">
                    {project.title}
                  </Typography>
                  <Typography variant="body1" textAlign="center" fontWeight="bold" fontSize="2vw">
                    <Button  color="black" onClick={()=>window.open(project.link,"_blank")} variant='outlined' sx={{border:"2px solid green",boxShadow:'5px 5px 5px green',":hover":{backgroundColor:'black',color:'orangered',boxShadow:'5px 5px 5px silver',border:'none'}}}>
                      Source Code
                    </Button> 
                  </Typography>
                  
                  
                </CardContent>
              </Card>
              
          ))}
          {/* Project Description */}
          
        </Box>
        <Box>
            {selectedProject && (
                <Paper
                  elevation={4}
                  sx={{
                    marginTop: 4,
                    padding: 3,
                    width: "100%",
                    maxWidth: "800px",
                    textAlign: "center",
                    backgroundColor:'skyblue'
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="body1">{selectedProject.description}</Typography>
                  
                </Paper>
              )}
          </Box>
      </Box>

        
            
        

        

      {/* Pagination */}
      <Pagination
        count={Math.ceil(projects.length / cardsPerPage)}
        page={page}
        onChange={handlePageChange}
        sx={{ marginTop: 3 }}
      />

      
    </Box>
  );
};

export default Project;