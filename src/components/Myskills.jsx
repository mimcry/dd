import React from "react";
import { Container, Grid, Chip, Typography, Avatar } from "@mui/material";

const skills = [
  { name: "React", img: "/react.svg" },
  { name: "Javascript", img: "/javascript.svg" },
  { name: "TypeScript", img: "typescript.svg" },

  { name: "Next.js", img: "/nextdotjs.svg" },
  { name: "Express", img: "/express.svg" },
  { name: 'Node JS', img: '/nodedotjs.svg' },
  { name: "MongoDB", img: "/mongodb.svg" },
  { name: "Tailwind", img: "/tailwindcss.svg" },

  { name: "Github", img: "github.svg" },

  { name: "Python", img: "/python.svg" },
  { name: "Figma", img: "figma.svg" },
  { name: "Material UI", img: "/mui.svg" },
  { name: "Postgres SQL", img: "/postgresql.svg" },

];

const SkillsPage = () => {
  return (
    <Container
      sx={{ padding: "2rem", backgroundColor: "#081b29", borderRadius: "8px",mt:6 }}
    >
        <Typography
             sx={{
               color: "white",
               textAlign: "center",
               fontSize: "1.9rem",
               mt:10,mb:6

             }}
           >
             My  <span style={{color:"#00abf0"}}>Skills</span>
           </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              avatar={
                <Avatar
                  src={skill.img}
                  alt={skill.name}
                  sx={{
                    width: 60, // Increase avatar width
                    height: 60, // Increase avatar height
                  }}
                />
              }
              label={skill.name}
              sx={{
                backgroundColor: "#ffffff",
                color: "#000",
                padding: "25px",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsPage;
