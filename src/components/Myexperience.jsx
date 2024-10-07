import React from "react";
import { Container, Typography, Paper, useMediaQuery } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";

const experienceData = [
  {
    title: "Internship",
    company: "Yaks Incorporation",
    date: "Sep 2024",
    description: `Learnt team collaboration, Frontend, Javascript, Tailwind, React Native, Next.js, TypeScript, Project Management, Industry Standards, and more.`,
  },

];

const Myexperience = () => {
 
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <div id="Experience">
      <Container
        sx={{
          padding: { xs: "1rem", md: "2rem" }, 
          backgroundColor: "#081b29",
          borderRadius: "8px",
          mt: { xs: 5, md: 5 }, 
        }}
      >
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "1.9rem" }, 
            mt: { xs: 4, md: 10 }, 
            mb: { xs: 4, md: 6 }, 
          }}
        >
          <span style={{ color: "#00abf0" }}>My</span> Experience
        </Typography>

        <Timeline position={isSmallScreen ? "right" : "alternate"}>
          {experienceData.map((experience, index) => (
            <TimelineItem key={index} sx={{ml:isSmallScreen? "-300px":null}}>
              <TimelineSeparator>
                <TimelineDot>
                  <WorkIcon />
                </TimelineDot>
                {index !== experienceData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ width: isSmallScreen ? "100%" : "auto" }}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: { xs: "0.5rem", md: "1rem" }, 
                    backgroundColor: "#0d283e",
                    color: "#ffffff",
                    width: "100%", 
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", md: "1.25rem" }, 
                    }}
                  >
                    {experience.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {experience.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginBottom: "0.5rem", color: "#b0bec5" }}
                  >
                    {experience.date}
                  </Typography>
                  <Typography variant="body2">
                    {experience.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </div>
  );
};

export default Myexperience;
