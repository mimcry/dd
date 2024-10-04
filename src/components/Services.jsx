import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import Container from "@mui/material/Container";
import { motion } from 'framer-motion';
function Home() {
  const [data] = useState([
    { services: "Web Developer", image: "web.avif" },
    { services: " App Developer", image: "app.avif" },
    { services: "UI/UX Design", image: "uiux.avif" },
  ]);
  
  return (
    <Container>
      <Grid>
        <Box sx={{ mt: 15 }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            What I Offer
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "1.9rem", color: "#00abf0" }}
          >
            Services
          </Typography>
        </Box>
     
   


        <Grid
          container
          spacing={2}
          sx={{
            gap: 10,
            display: "flex",
            mt: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          {data.map((data) => (
            <Grid item xs={12} lg={3} md={4} sm={6}>
        
              <Card
                sx={{
                  background: `linear-gradient(#212245b2,#212245b1),url(${data.image})`,
                  backgroundSize: "cover",
                  position: "relative",
                  borderRadius: "25px",
                  bgcolor: "#2f285f",
                  height: { lg: "190px", xs: "230px" },
                  padding: "2rem",
                  cursor: "pointer",
                  "&:hover": {
                    transition: "0.3s",
                    transform: "scale(1.02)",
                  },
                  border: "1px solid black",
                }}
              >
                <Typography sx={{textAlign:"center",fontSize:"1.5rem",color:"white"}}>{data.services}</Typography>
                <Typography sx={{ display: "flex", mt: 3 }}>
                  <Typography
                    sx={{
                      mt: { lg: 16, xs: 22 },
                      textAlign: "center",
                      fontWeight: "bold",
                      color:"white"
                    }}
                  >
                    Learn more...
                  </Typography>
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>    
    </Container>
  );
}

export default Home;
