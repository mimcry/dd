import React, { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography, Grid, Tabs } from "@mui/material";
import PropTypes from "prop-types";

import Tab from "@mui/material/Tab";
import { motion } from "framer-motion";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Container from "@mui/material/Container";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Aboutus() {
  const [value, setValue] = React.useState(0);  // Set to 0 to show "Skills" by default

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <div id="About Me">
      <React.Fragment>
   
          <Container>
            <Paper elevation={24} sx={{ borderRadius: "20px", mt: 10 }}>
              <Box
                sx={{
                  mt: 10,
                  borderRadius: "20px",
                  bgcolor: "#0d3959",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    paddingTop: 5,
                  }}
                >
                  About <span style={{ color: "#00abf0" }}>Me</span>
                </Typography>
                <Grid container spacing={2}>
                  <Grid item lg={4} xs={12} md={6}>
                    <Box
                      component="img"
                      src="salon.png"
                      sx={{
                        borderRadius: "25px",
                        pl: 4,
                        mt: 5,
                        width: { lg: "70%", xs: "80%", md: "90%", sm: "90%" },
                        height: { lg: "400px", xs: "420px", md: "520px" },
                        objectFit: "cover",

                        mb: 5,
                      }}
                    />
                  </Grid>
                  <Grid item lg={8} xs={12} md={6}>
                    <Typography
                      sx={{
                        mt: 2,
                        mr: { lg: "90px", md: "90px", color: "gray" },
                        padding: 5,paddingBottom:0,
                        paddingTop: { md: 0, sm: 0, lg: 5, xs: 0 }
                      }}
                    >
                      I'm a passionate student exploring Web development.
                      With a love for creating intuitive user experiences, I merge
                      creativity with code. Eager to learn, I embrace challenges
                      and strive to craft visually appealing websites that engage
                      users and leave a lasting impression. Let's innovate
                      together!
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ mt: 3 }}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                        >
                          <Tab
                            sx={{ fontSize: "1.05rem", color: "white" }}
                            label="Skills"
                            {...a11yProps(0)}
                          />
                          <Tab
                            sx={{ fontSize: "1.05rem", color: "white" }}
                            label="Experience"
                            {...a11yProps(1)}
                          />
                          <Tab
                            sx={{ fontSize: "1.05rem", color: "white" }}
                            label="Education"
                            {...a11yProps(2)}
                          />
                        </Tabs>
                      </Box>
                      <CustomTabPanel value={value} index={0}>
                        <Typography sx={{ color: "orange" }}>
                          Web Development
                        </Typography>
                        <Typography sx={{ fontSize: "1.1rem", color: "white" }}>
                          - Web app Development
                        </Typography>
                        <Typography sx={{ fontSize: "1.1rem", color: "white" }}>
                          - App Development
                        </Typography>
                        <Typography sx={{ fontSize: "1.1rem", color: "white" }}>
                          - Figma Designer
                        </Typography>

                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={1}>
                        <Typography sx={{ color: "orange" }}>
                          University Semester Project
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                          - Foodie (Food odering Website)
                        </Typography>

                        <Typography sx={{ color: "white" }}>
                          - P2P file sharing system
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                          - FaceTrace
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                          - Foodie mobile app
                        </Typography>
                        <Typography sx={{ color: "orange" }}>Self</Typography>
                        <Typography sx={{ color: "white" }}>
                          - Personal Website
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                          - Hotel booking and food odering website
                        </Typography>
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={2}>
                        <Typography sx={{ color: "orange" }}>SLC</Typography>
                        <Typography sx={{ color: "white" }}>
                          - Dhulikhel High School
                        </Typography>
                        <Typography sx={{ color: "orange" }}>
                          Secondary Eduaction
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                          - National Institute of Science and Technology
                        </Typography>
                        <Typography sx={{ color: "orange" }}>
                          Bachelor-Computer Science
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                          - Kathmandu University
                        </Typography>
                      </CustomTabPanel>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Container>
    
      </React.Fragment>
    </div>
  );
}

export default Aboutus;
