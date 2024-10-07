import React from "react";
import { AppBar, Box, Toolbar, Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-scroll";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Aboutus from "./components/Aboutus";
import Webdevelopment from "./components/Webdevelopment";
import Appdevelopment from "./components/Appdevelopment";
import Uiux from "./components/uiux";
import Myskills from "./components/Myskills";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ backgroundColor: "#081b29" }}>
      <AppBar
        sx={{
          backgroundColor: "#081b29",
          position: "fixed",
          zIndex: 1000,
          boxShadow: "none",
          width: "100%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
          
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "flex-start" : "center",
              width: "100%", // Full width container
              overflowX: isMobile ? "auto" : "hidden", // Allow horizontal scroll on mobile
              whiteSpace: isMobile ? "nowrap" : "normal", // Prevent line breaks on mobile
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant={isMobile ? "scrollable" : "fullWidth"} // Make tabs scrollable on mobile, fullWidth otherwise
              scrollButtons="auto"
              sx={{
                color: "white",
                flex: 1,
                alignItems: "center",
              }}
            >
              {["Home", "About", "Projects", "Experience", "Contact"].map((page, index) => (
                <Link to={page} spy={true} smooth={true} key={index}>
                  <Tab
                    sx={{
                      fontSize: isMobile ? "0.85rem" : "1rem", // Adjust font size based on screen size
                      color: "white",
                      textTransform: "none",
                      "&:hover": {
                        transition: "0.3s",
                        transform: "scale(1.1)",
                        color: "#00abf0",
                      },
                    }}
                    label={page}
                  />
                </Link>
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ paddingTop: "64px" }}>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web" element={<Webdevelopment />} />
          <Route path="/app" element={<Appdevelopment />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/myskills" element={<Myskills />} />
        </Routes>
      </Box>
    </div>
  );
};

export default App;
